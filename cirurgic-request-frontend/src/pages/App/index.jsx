import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home';
import { Layout } from '../../components/Layout';
import { Orders } from '../Orders';
import { Order } from '../Order';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Orders />} />
        <Route path="/pedido/:id" element={<Order />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Layout>
  );
};
