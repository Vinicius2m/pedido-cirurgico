import styled from 'styled-components';

const Container = styled.div`

  width: 55vw;
  min-width: 260px;
  max-width: 800px;
  min-height: 300px;
  background: #0092DF;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 6px 5px #3F3B3B);

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
      border: none;
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

  .flex {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: row;
      gap: 10px;

      label {
          text-align: center;
      }

      input {
          flex: 1 1 50%;
          height: 48px;
      }
  }

  button {
      background: ${({ theme }) => theme.colors.defaultYellow};
      color: ${({ theme }) => theme.colors.dark};
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
  }




  @media screen and (max-width: 500px){

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


`;

export default Container;
