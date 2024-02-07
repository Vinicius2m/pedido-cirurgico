import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InitialState = {
  cirurgicRequests: [],
  getCirurgicRequests: async () => {},
  getOneCirurgicRequest: async () => {},
  createCirurgicRequest: () => {},
  updateCirurgicRequest: async () => {},
  removeCirurgicRequest: () => {},
};

export const CirurgicRequestsContext = createContext(InitialState);

export const CirurgicRequestsProvider = ({ children }) => {
  const [cirurgicRequests, setCirurgicRequests] = useState([]);

  const getCirurgicRequests = useCallback(async () => {
    await api.get('/cirurgic-requests').then((response) => {
      setCirurgicRequests(response.data);
    });
  }, []);

  useEffect(() => {
    if (!cirurgicRequests?.length) {
      getCirurgicRequests();
    }
  }, [cirurgicRequests?.length, getCirurgicRequests]);

  const getOneCirurgicRequest = useCallback(async (id) => {
    const response = await api.get(`/cirurgic-requests/${id}`);
    return response.data;
  }, []);

  const createCirurgicRequest = useCallback(
    (newCirurgicRequest) => {
      api
        .post('/cirurgic-requests', newCirurgicRequest)
        .then(() => {
          toast.success('Pedido adicionado');
          getCirurgicRequests();
        })
        .catch(() => {
          toast.error('Erro ao adicionar pedido');
        });
    },
    [getCirurgicRequests],
  );

  const updateCirurgicRequest = useCallback(
    async (id, updatedRequest) => {
      api
        .patch(`/cirurgic-requests/${id}`, updatedRequest)
        .then(async () => {
          toast.success('Pedido atualizado');
          await getCirurgicRequests();
        })
        .catch(() => {
          toast.error('Erro ao atualizar pedido');
          return new Error();
        });
    },
    [getCirurgicRequests],
  );

  const removeCirurgicRequest = (id) => {
    api
      .delete(`/cirurgic-requests/${id}`)
      .then(() => {
        toast.warn('Pedido removido');
        getCirurgicRequests();
      })
      .catch(() => {
        toast.error('Erro ao remover pedido');
      });
  };

  return (
    <CirurgicRequestsContext.Provider
      value={{
        cirurgicRequests,
        getCirurgicRequests,
        getOneCirurgicRequest,
        createCirurgicRequest,
        updateCirurgicRequest,
        removeCirurgicRequest,
      }}
    >
      {children}
    </CirurgicRequestsContext.Provider>
  );
};

CirurgicRequestsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCirurgicRequests = () => useContext(CirurgicRequestsContext);
