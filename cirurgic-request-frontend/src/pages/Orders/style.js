import styled from 'styled-components';

const OrdersContainer = styled.div`
  min-height: calc(100vh - 60px);
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 20px;

    .right_container {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        padding: 20px 20px;
        margin: 0 auto;
        gap: 20px;
        min-height: calc(100vh - 140px);
        height: calc(100vh - 140px);
        min-width: 330px;
        /* overflow-y: auto; */

        > :nth-child(even){
            animation: card_anim .6s 1 ease-in-out;
        }

        > :nth-child(odd){
            animation: card_anim .5s 1 ease-in-out;
        }
    }

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
`;

export default OrdersContainer;
