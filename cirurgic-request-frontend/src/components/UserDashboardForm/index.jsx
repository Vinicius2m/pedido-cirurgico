import Container from './style';
import PropTypes from 'prop-types';

export const DashboardForm = ({ children }) => {
  return <Container>{children}</Container>;
};

DashboardForm.propTypes = {
  children: PropTypes.node.isRequired,
};
