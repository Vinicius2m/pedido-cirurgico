import { useCirurgicRequests } from '../../providers/cirurgicRequests';
import * as S from './style';
import { CirurgicRequestCard } from '../../components/CirurgicRequest';

export const Orders = () => {
  const { cirurgicRequests } = useCirurgicRequests();

  return (
    <S.OrdersContainer>
      <h2>Pedidos Cirúrgicos:</h2>
      <S.CardsContainer>
        {cirurgicRequests.length ? (
          cirurgicRequests.map((cirurgicRequest) => (
            <CirurgicRequestCard
              key={cirurgicRequest.id}
              cirurgicRequest={cirurgicRequest}
            />
          ))
        ) : (
          <p>Nenhum pedido encontrado</p>
        )}
      </S.CardsContainer>
    </S.OrdersContainer>
  );
};
