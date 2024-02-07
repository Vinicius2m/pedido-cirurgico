import { DashboardForm } from '../../components/UserDashboardForm';
import { Container } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import moment from 'moment';
import { useCirurgicRequests } from '../../providers/cirurgicRequests';

const schema = yup.object().shape({
  doctor: yup.string().required('*Nome obrigatório'),
  patient: yup.string().required('*Nome obrigatória'),
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
    })
    .required('*Data obrigatória'),
  procedures: yup.string().required('*Procedimentos obrigatórios'),
  hospital: yup.string().required('*Hospital obrigatório'),
  room: yup.string().required('*Sala obrigatória'),
  generalNotes: yup.string().required('*Observações obrigatórias'),
});

export const Home = () => {
  const { createCirurgicRequest } = useCirurgicRequests();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    if (data.surgeryDate) {
      data.surgeryDate = moment(data.surgeryDate).toISOString();
    }
    createCirurgicRequest(data);
  };

  return (
    <Container>
      <DashboardForm>
        <h2> Novo Pedido Cirúrgico</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="doctor">{errors.doctor?.message}</label>
            <input
              id="doctor"
              type="text"
              placeholder="Médico"
              {...register('doctor')}
            />
          </div>
          <div>
            <label htmlFor="patient_field">{errors.patient?.message}</label>
            <input
              id="patient_field"
              type="text"
              placeholder="Paciente"
              {...register('patient')}
            />
          </div>
          <div>
            <label htmlFor="surgeryDate_field">
              {errors.surgeryDate?.message}
            </label>
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
            <label htmlFor="procedures_field">
              {errors.procedures?.message}
            </label>
            <input
              id="procedures_field"
              type="text"
              placeholder="Procedimento"
              {...register('procedures')}
            />
          </div>
          <div>
            <label htmlFor="hospital_field">{errors.hospital?.message}</label>
            <input
              id="hospital_field"
              type="text"
              placeholder="Hospital"
              {...register('hospital')}
            />
          </div>

          <div>
            <label htmlFor="room_field">{errors.room?.message}</label>
            <input
              id="room_field"
              type="text"
              placeholder="Sala"
              {...register('room')}
            />
          </div>

          <div>
            <label htmlFor="generalNotes_field">
              {errors.generalNotes?.message}
            </label>
            <textarea
              id="generalNotes_field"
              maxLength={100}
              placeholder="Observações gerais"
              {...register('generalNotes')}
            />
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </DashboardForm>
    </Container>
  );
};
