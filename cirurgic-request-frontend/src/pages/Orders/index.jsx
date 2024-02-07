import { useCirurgicRequests } from '../../providers/cirurgicRequests';
import { OrdersContainer, CardsContainer } from './style';
import { CirurgicRequestCard } from '../../components/CirurgicRequest';

export const Orders = () => {
  const { cirurgicRequests } = useCirurgicRequests();

  return (
    <OrdersContainer>
      <h2>Pedidos Cirúrgicos:</h2>
      <CardsContainer>
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
      </CardsContainer>
    </OrdersContainer>
  );
};
