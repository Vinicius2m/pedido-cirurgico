import { Sidebar } from '../Sidebar';
import * as S from './style';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <S.SLayout>
      <Sidebar />
      <S.SMain>{children}</S.SMain>
    </S.SLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
