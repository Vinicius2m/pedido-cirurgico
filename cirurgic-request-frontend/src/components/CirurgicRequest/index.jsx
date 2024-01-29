import { useCirurgicRequests } from '../../providers/cirurgicRequests';
import { Card, CardButton, DeleteButton } from './style';
import PropTypes from 'prop-types';

export const CirurgicRequestCard = ({ cirurgicRequest }) => {
  const { removeCirurgicRequest, updateCirurgicRequest } =
    useCirurgicRequests();

  const handleRemove = (id) => {
    removeCirurgicRequest(id);
  };

  const handleUpdate = (id) => {
    updateCirurgicRequest(id, {});
  };

  return (
    <Card>
      <span>Paciente: {cirurgicRequest.patient} </span>
      <p>{cirurgicRequest.doctor} </p>
      <div>
        <CardButton onClick={() => handleUpdate(cirurgicRequest.id)}>
          Editar
        </CardButton>
        <DeleteButton
          onClick={() => handleRemove(cirurgicRequest.id)}
          id="delete"
        >
          Remover
        </DeleteButton>
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
