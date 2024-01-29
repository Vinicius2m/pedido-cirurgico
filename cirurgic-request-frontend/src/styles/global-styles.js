import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Nunito', sans-serif;
    }

    .Toastify__toast-theme--colored.Toastify__toast--success {
        color: ${({ theme }) => theme.colors.toastifyColorSuccess};
        background: ${({ theme }) => theme.colors.defaultYellow};
        border: 2px solid ${({ theme }) => theme.colors.dark};
        border-radius: 10px;
        color: ${({ theme }) => theme.colors.dark};

        .Toastify__progress-bar {
            background: ${({ theme }) => theme.colors.dark};
        }

        .Toastify__close-button--colored {

            color: ${({ theme }) => theme.colors.dark};
        }
    }

    .Toastify__toast-theme--colored.Toastify__toast--error, .Toastify__toast-theme--colored.Toastify__toast--warning {
        color: ${({ theme }) => theme.colors.toastifyColorSuccess};
        background: ${({ theme }) => theme.colors.dark};
        border: 2px solid ${({ theme }) => theme.colors.defaultYellow};
        border-radius: 10px;
        color: ${({ theme }) => theme.colors.defaultYellow};

        .Toastify__progress-bar {
            background: ${({ theme }) => theme.colors.defaultYellow};
        }

        .Toastify__close-button--colored {

            color: ${({ theme }) => theme.colors.dark};
        }
    }

    body {
        background: ${({ theme }) => theme.colors.defaultGradient};
        background-attachment: fixed;
        color: ${({ theme }) => theme.colors.light};
        min-height: 100vh;
        height: 100%;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`;
