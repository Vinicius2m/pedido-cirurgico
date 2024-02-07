import * as S from './style';
import PropTypes from 'prop-types';

export const DashboardForm = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

DashboardForm.propTypes = {
  children: PropTypes.node.isRequired,
};
