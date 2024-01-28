import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();

    const messageError = exception.meta?.cause ?? exception.message;

    exception.code === 'P2025'
      ? response.status(404).json({
          statusCode: 404,
          message: `Resource not found. ${messageError}`,
        })
      : response.status(500).json({
          statusCode: 500,
          message: messageError,
        });
  }
}
