import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as Styled from './styles';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Styled.Container>Olá mundo</Styled.Container>}
        />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
