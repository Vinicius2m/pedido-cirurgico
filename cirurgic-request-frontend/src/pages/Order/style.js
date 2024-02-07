import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;

  section {
    width: 55vw;
    min-width: 260px;
    max-width: 500px;
    min-height: 300px;
    background: #0092DF;
    border-radius: 10px;
    margin-top: 20px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    filter: drop-shadow(0 6px 5px #3F3B3B);

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    span {
      font-size: 24px;
    }

    p {
      font-size: 20px;
      margin: 10px 0;
    }

    .card-buttons-container {
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: space-evenly;
    }

    #cancel-button {
      height: 40px;
      width: 130px;
      margin-top: 20px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      border: transparent;
      background-color: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.defaultYellow};

      &:hover {
        filter: brightness(0.9);
      }

      @media (width <= 800px) {
        width: 90px;

        &:hover {
          filter: unset;
        }
      }
    }

    #clear-all-button {
      background: ${({ theme }) => theme.colors.danger};
      color: ${({ theme }) => theme.colors.light};
      height: 40px;
      width: 130px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      border: transparent;

      &:hover {
        filter: brightness(0.9);
      }

      @media (width <= 800px) {
        width: 130px;

        &:hover {
          filter: unset;
        }
      }
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;


        > div{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            min-height: 67px;

            label {
                display: block;
                font-size: 14px;
                line-height: 12px;
                color: ${({ theme }) => theme.colors.defaultYellow};
                text-align: left;
                margin-bottom: 2px;
            }
        }
    }

    input, textarea {
        width: 100%;
        height: 48px;
        border-radius: 5px;
        font-size: 17px;
        padding: 0 4px;
        outline: none;
        border: 2px solid transparent;
        resize: none;

        :focus {
            border: 2px solid ${({ theme }) => theme.colors.defaultYellow};
        }
    }

    #generalNotes_field {
        min-height: 150px;
    }




    @media screen and (width <= 500px){
        form {
            gap: 10px;
        }

        .flex {
            gap: 8px;

            label {
                text-align: center;
            }
        }

        input {
            font-size: 16px;
        }
    }
  }
`;

export const BoldSpan = styled.span`
  font-weight: bold;
  margin: 0;
`;

export const CardButton = styled.button`
  background: ${({ theme }) => theme.colors.defaultYellow};
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  height: 40px;
  width: 130px;
  border: none;
  font-weight: bold;
  border-radius: 10px;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.darkGray};
    cursor: not-allowed;
    filter: none;
  }
`;
