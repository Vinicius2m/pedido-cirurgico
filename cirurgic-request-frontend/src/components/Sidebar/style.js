import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SSidebar = styled.div`
    width: ${({ isOpen }) => (!isOpen ? `auto` : '300px')};
    background: ${({ theme }) => theme.colors.secondary};
    min-height: 100vh;
    padding: 24px;

    display: flex;
    flex-direction: column;


    position: relative;
`;

export const SidebarButton = styled.button`
    position: absolute;
    border: none;
    top: 48px;
    right: -16px;
    width: 32px;
    height: 32px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.light};
    font-size: 64px;

    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.colors.light};
    margin: 24px 0;
`;

export const LinkContainer = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.colors.primary)};
    border-radius: 6px;
    margin: 8px 0;

    &:hover {
      border-radius: 6px;
        background-color: ${({ theme }) => theme.colors.dark};
    }
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(8px - 2px) 0;
`;

export const Title = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(8px - 2px) 0;
`;

export const LinkIcon = styled.div`
    padding: 8px 16px;
    display: flex;

    svg {
        font-size: 20px;
    }
`;

export const LinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: 8px;
`;
