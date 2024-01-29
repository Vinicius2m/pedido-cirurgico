import { useEffect } from 'react';
import { useCirurgicRequests } from '../../providers/cirurgicRequests';
import OrdersContainer from './style';
import { CirurgicRequestCard } from '../../components/CirurgicRequest';

export const Orders = () => {
  const { cirurgicRequests, getCirurgicRequests } = useCirurgicRequests();

  useEffect(() => {
    getCirurgicRequests();
    console.log(cirurgicRequests);
  }, [getCirurgicRequests]);

  return (
    <OrdersContainer>
      <h2>Pedidos Cirúrgicos:</h2>
      <div className="right_container">
        {cirurgicRequests &&
          cirurgicRequests.map((cirurgicRequest) => (
            <CirurgicRequestCard
              key={cirurgicRequest.id}
              cirurgicRequest={cirurgicRequest}
            />
          ))}
      </div>
    </OrdersContainer>
  );
};
