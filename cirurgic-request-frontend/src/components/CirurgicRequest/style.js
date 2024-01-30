import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  padding: 5px 10px;
  max-height: 360px;

  span {
    font-size: 24px;
    margin: 10px;
  }

  p {
    font-size: 20px;
    margin: 10px;
  }

  button {
    margin: 5px;
  }

  .card-buttons-container {
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-width: 250px;
    width: auto;
  }

  @media (max-width: 280px) {
    min-width: 220px;
  }
`;

export const CardButton = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  border: transparent;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.defaultYellow};
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    filter: brightness(0.9);
  }
  @media (max-width: 800px) {
    width: 90px;
    &:hover {
      filter: unset;
    }
  }
`;

export const AchievedButton = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  margin: 15px 0;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.light};
  cursor: not-allowed;
  @media (max-width: 800px) {
    width: 90px;
  }
`;

export const DeleteButton = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  border: transparent;
  margin: 15px 0;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.defaultYellow};

  &:hover {
    filter: brightness(0.9);
  }
  @media (max-width: 800px) {
    width: 90px;
    &:hover {
      filter: unset;
    }
  }
`;
