import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import moment from 'moment';
import { useCirurgicRequests } from '../../providers/cirurgicRequests';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BoldSpan, CardButton, Container } from './style';

export const Order = () => {
  const [cirurgicRequest, setCirurgicRequest] = useState({});
  const [editMode, setEditMode] = useState(false);
  const {
    getOneCirurgicRequest,
    updateCirurgicRequest,
    removeCirurgicRequest,
  } = useCirurgicRequests();
  const { id: requestId } = useParams();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    doctor: yup.string(),
    patient: yup.string(),
    surgeryDate: yup
      .date('*Data inválida')
      .nullable()
      .transform((value, originalValue) => {
        if (
          typeof originalValue === 'string' &&
          (originalValue === '' ||
            originalValue === '__/__/____' ||
            originalValue.includes('_'))
        )
          return null;
        const isValid = moment(originalValue, 'DD/MM/YYYY', true).isValid();
        return isValid ? moment(originalValue, 'DD/MM/YYYY').toDate() : null;
      })
      .min(moment().startOf('day').toDate(), '*Data deve ser hoje ou no futuro')
      .test('is-future', '*Data deve ser hoje ou no futuro', (value) => {
        return value && moment(value).isSameOrAfter(moment().startOf('day'));
      }),
    procedures: yup.string(),
    hospital: yup.string(),
    room: yup.string(),
    generalNotes: yup.string(),
  });

  const { register, handleSubmit, watch, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const fields = watch();

  const isFormEmpty = Object.values(fields).every((field) => !field);

  const onSubmit = (data) => {
    if (data.surgeryDate) {
      data.surgeryDate = moment(data.surgeryDate).toISOString();
    }

    updateCirurgicRequest(requestId, data).then(() => {
      setEditMode(false);
      setCirurgicRequest(data);
    });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleRemove = (id) => {
    removeCirurgicRequest(id);
    navigate('/pedidos');
  };

  const handleClearAll = () => {
    setValue('doctor', '');
    setValue('patient', '');
    setValue('surgeryDate', '');
    setValue('procedures', '');
    setValue('hospital', '');
    setValue('room', '');
    setValue('generalNotes', '');
  };

  useEffect(() => {
    setValue('doctor', cirurgicRequest.doctor);
    setValue('patient', cirurgicRequest.patient);
    setValue(
      'surgeryDate',
      moment(cirurgicRequest.surgeryDate).format('DD/MM/YYYY'),
    );
    setValue('procedures', cirurgicRequest.procedures);
    setValue('hospital', cirurgicRequest.hospital);
    setValue('room', cirurgicRequest.room);
    setValue('generalNotes', cirurgicRequest.generalNotes);
  }, [cirurgicRequest, setValue, editMode]);

  useEffect(() => {
    if (!cirurgicRequest?.id) {
      getOneCirurgicRequest(requestId).then((cirurgicRequest) => {
        setCirurgicRequest(cirurgicRequest);
      });
    }
  }, [cirurgicRequest?.id, getOneCirurgicRequest, requestId]);

  return (
    <Container>
      <section>
        <h2>Pedido</h2>

        {!editMode ? (
          <>
            <p>
              <BoldSpan>Médico:</BoldSpan> {cirurgicRequest.doctor}
            </p>
            <p>
              <BoldSpan>Paciente:</BoldSpan> {cirurgicRequest.patient}
            </p>
            <p>
              <p>
                <BoldSpan>Data da cirurgia:</BoldSpan>{' '}
                {new Date(cirurgicRequest.surgeryDate).toLocaleDateString(
                  'pt-BR',
                )}
              </p>
            </p>
            <p>
              <BoldSpan>Hospital:</BoldSpan>{' '}
              <span>{cirurgicRequest.hospital}</span>
            </p>
            <p>
              <BoldSpan>Sala:</BoldSpan> {cirurgicRequest.room}
            </p>
            <p>
              <BoldSpan>Procedimento:</BoldSpan> {cirurgicRequest.procedures}
            </p>
            <p>
              <BoldSpan>Observações:</BoldSpan> {cirurgicRequest.generalNotes}
            </p>
            <div className="card-buttons-container">
              <button
                id="cancel-button"
                onClick={() => handleRemove(cirurgicRequest.id)}
              >
                Remover
              </button>
              <CardButton isDisabled={false} onClick={handleEdit}>
                Editar
              </CardButton>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                id="doctor"
                type="text"
                placeholder="Médico"
                {...register('doctor')}
              />
            </div>
            <div>
              <input
                id="patient_field"
                type="text"
                placeholder="Paciente"
                {...register('patient')}
              />
            </div>
            <div>
              <InputMask
                min={moment().format('DD/MM/YYYY')}
                id="surgeryDate_field"
                mask="99/99/9999"
                placeholder="Data da cirurgia"
                {...register('surgeryDate', {
                  validate: (value) => {
                    const date = moment(value, 'DD/MM/YYYY');
                    const minDate = moment().startOf('day');
                    return (
                      date.isSameOrAfter(minDate) ||
                      'A data deve ser hoje ou no futuro'
                    );
                  },
                })}
              />
            </div>
            <div>
              <input
                id="procedures_field"
                type="text"
                placeholder="Procedimento"
                {...register('procedures')}
              />
            </div>
            <div>
              <input
                id="hospital_field"
                type="text"
                placeholder="Hospital"
                {...register('hospital')}
              />
            </div>
            <div>
              <input
                id="room_field"
                type="text"
                placeholder="Sala"
                {...register('room')}
              />
            </div>
            <div>
              <textarea
                id="generalNotes_field"
                maxLength={100}
                placeholder="Observações gerais"
                {...register('generalNotes')}
              />
            </div>
            <button onClick={handleClearAll} id="clear-all-button">
              Limpar Pedido
            </button>
            <div className="card-buttons-container">
              <button id="cancel-button" onClick={() => setEditMode(false)}>
                Cancelar
              </button>
              <CardButton
                isDisabled={isFormEmpty}
                disabled={isFormEmpty}
                type="submit"
              >
                Confirmar
              </CardButton>
            </div>
          </form>
        )}
      </section>
    </Container>
  );
};
