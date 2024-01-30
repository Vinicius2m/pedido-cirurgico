import { useCirurgicRequests } from '../../providers/cirurgicRequests';
import { Card, CardButton, DeleteButton } from './style';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const CirurgicRequestCard = ({ cirurgicRequest }) => {
  const { removeCirurgicRequest } = useCirurgicRequests();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    removeCirurgicRequest(id);
  };

  const handleDetails = (id) => {
    navigate(`/pedido/${id}`);
  };

  return (
    <Card>
      <span>Paciente: {cirurgicRequest.patient} </span>
      <p>Médico: {cirurgicRequest.doctor} </p>
      <p>Procedimento: {cirurgicRequest.procedures} </p>
      <p>
        Data da cirurgia:{' '}
        {new Date(cirurgicRequest.surgeryDate).toLocaleDateString('pt-BR')}{' '}
      </p>
      <p>Hospital: {cirurgicRequest.hospital} </p>
      <div className="card-buttons-container">
        <DeleteButton
          onClick={() => handleRemove(cirurgicRequest.id)}
          id="delete"
        >
          Remover
        </DeleteButton>
        <CardButton
          onClick={() => handleDetails(cirurgicRequest.id)}
          id="details"
        >
          Detalhes
        </CardButton>
      </div>
    </Card>
  );
};

CirurgicRequestCard.propTypes = {
  cirurgicRequest: PropTypes.shape({
    id: PropTypes.number,
    room: PropTypes.string,
    procedures: PropTypes.string,
    doctor: PropTypes.string,
    patient: PropTypes.string,
    hospital: PropTypes.string,
    surgeryDate: PropTypes.string,
    createdAt: PropTypes.string,
    generalNotes: PropTypes.string,
  }).isRequired,
};
