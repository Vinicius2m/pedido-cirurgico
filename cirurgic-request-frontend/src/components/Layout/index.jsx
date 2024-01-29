import { Sidebar } from '../Sidebar';
import { SLayout, SMain } from './style';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
