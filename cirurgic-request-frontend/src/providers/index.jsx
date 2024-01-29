import { CirurgicRequestsProvider } from './cirurgicRequests';
import PropTypes from 'prop-types';

export const Providers = ({ children }) => {
  return <CirurgicRequestsProvider>{children}</CirurgicRequestsProvider>;
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
