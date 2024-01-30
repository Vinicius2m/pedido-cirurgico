import { useCirurgicRequests } from '../../providers/cirurgicRequests';
import OrdersContainer from './style';
import { CirurgicRequestCard } from '../../components/CirurgicRequest';

export const Orders = () => {
  const { cirurgicRequests } = useCirurgicRequests();

  return (
    <OrdersContainer>
      <h2>Pedidos Cirúrgicos:</h2>
      <div className="cards-container">
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
      </div>
    </OrdersContainer>
  );
};
