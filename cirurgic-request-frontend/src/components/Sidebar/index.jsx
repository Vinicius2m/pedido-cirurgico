import { useState } from 'react';
import {
  FiChevronsLeft,
  FiActivity,
  FiEdit3,
  FiGrid,
  FiArrowUp,
} from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import * as S from './style';

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.SSidebar isOpen={sidebarOpen}>
      <>
        <S.SidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <FiChevronsLeft />
        </S.SidebarButton>
      </>
      <S.Title to="/">
        <S.LinkIcon>
          <FiActivity />
        </S.LinkIcon>
        {sidebarOpen && (
          <>
            <S.LinkLabel>App Pedidos Cirúrgicos</S.LinkLabel>
          </>
        )}
      </S.Title>
      <S.Divider />
      {linksArray.map(({ icon, label, to }) => (
        <S.LinkContainer key={label} isActive={pathname === to}>
          <S.SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <S.LinkIcon>{icon}</S.LinkIcon>
            {sidebarOpen && (
              <>
                <S.LinkLabel>{label}</S.LinkLabel>
              </>
            )}
          </S.SLink>
        </S.LinkContainer>
      ))}
      <S.Divider />
      <S.LinkContainer
        style={{
          position: 'fixed',
          bottom: 0,
          width: sidebarOpen ? '130px' : '50px',
        }}
      >
        <S.SLink onClick={handleScrollToTop}>
          <S.LinkIcon>
            <FiArrowUp />
          </S.LinkIcon>
          {sidebarOpen && (
            <>
              <S.LinkLabel>Ir ao Topo</S.LinkLabel>
            </>
          )}
        </S.SLink>
      </S.LinkContainer>
    </S.SSidebar>
  );
};

const linksArray = [
  {
    label: 'Novo Pedido',
    icon: <FiEdit3 />,
    to: '/',
  },
  {
    label: 'Seus Pedidos',
    icon: <FiGrid />,
    to: '/pedidos',
  },
];
