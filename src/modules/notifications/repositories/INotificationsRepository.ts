import ICreateAppointmentDTO from '../dtos/ICreateNotificationDTO';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificationsRepository {
  create(date: ICreateAppointmentDTO): Promise<Notification>;
}
