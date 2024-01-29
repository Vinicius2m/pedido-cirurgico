import { useState } from 'react';
import {
  FiChevronsLeft,
  FiActivity,
  FiEdit3,
  FiGrid,
  FiArrowUp,
} from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import {
  Divider,
  SLink,
  LinkContainer,
  LinkIcon,
  LinkLabel,
  SSidebar,
  SidebarButton,
  Title,
} from './style';

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <FiChevronsLeft />
        </SidebarButton>
      </>
      <Title to="/">
        <LinkIcon>
          <FiActivity />
        </LinkIcon>
        {sidebarOpen && (
          <>
            <LinkLabel>App Pedidos Cirúrgicos</LinkLabel>
          </>
        )}
      </Title>
      <Divider />
      {linksArray.map(({ icon, label, to }) => (
        <LinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <LinkIcon>{icon}</LinkIcon>
            {sidebarOpen && (
              <>
                <LinkLabel>{label}</LinkLabel>
              </>
            )}
          </SLink>
        </LinkContainer>
      ))}
      <Divider />
      <LinkContainer
        style={{
          position: 'fixed',
          bottom: 0,
          width: sidebarOpen ? '130px' : '50px',
        }}
      >
        <SLink onClick={handleScrollToTop}>
          <LinkIcon>
            <FiArrowUp />
          </LinkIcon>
          {sidebarOpen && (
            <>
              <LinkLabel>Ir ao Topo</LinkLabel>
            </>
          )}
        </SLink>
      </LinkContainer>
    </SSidebar>
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
