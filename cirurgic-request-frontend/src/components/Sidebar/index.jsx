import { useState } from 'react';

import { FiChevronsLeft } from 'react-icons/fi';
import { FiActivity } from 'react-icons/fi';

import { AiOutlineApartment, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineAnalytics } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SSidebar,
  SSidebarButton,
  STitle,
} from './style';

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <FiChevronsLeft />
        </SSidebarButton>
      </>
      <STitle>
        <SLinkIcon>
          <FiActivity />
        </SLinkIcon>
        {sidebarOpen && (
          <>
            <SLinkLabel>App Pedidos Cirúrgicos</SLinkLabel>
          </>
        )}
      </STitle>
      <SDivider />
      {linksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
    </SSidebar>
  );
};

const linksArray = [
  {
    label: 'Home',
    icon: <AiOutlineHome />,
    to: '/',
  },
  {
    label: 'Statistics',
    icon: <MdOutlineAnalytics />,
    to: '/statistics',
  },
  {
    label: 'Customers',
    icon: <BsPeople />,
    to: '/customers',
  },
  {
    label: 'Diagrams',
    icon: <AiOutlineApartment />,
    to: '/diagrams',
  },
];
