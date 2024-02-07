import styled from 'styled-components';

export const OrdersContainer = styled.div`
  min-height: 100vh;
  padding: 40px 20px;

  @keyframes form_anim {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
  }

  @keyframes card_anim {
      0% {
          opacity: 0;
          transform: scale(0.5);
      }

      70% {
          opacity: 1;
          transform: scale(1.05);
      }
  }

  @media screen and (width <= 500px){
    .cards-container {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      padding: 20px 0;
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  justify-content: center;
  padding: 20px;
  min-height: calc(100vh - 140px);

  > :nth-child(even){
      animation: card_anim .6s 1 ease-in-out;
  }

  > :nth-child(odd){
      animation: card_anim .5s 1 ease-in-out;
  }

   @media screen and (width <= 500px){
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    padding: 20px 0;

  }

`;
