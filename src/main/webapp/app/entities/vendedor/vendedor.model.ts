import dayjs from 'dayjs/esm';

export interface IVendedor {
  id: number;
  nombre?: string | null;
  apellidos?: string | null;
  email?: string | null;
  telefono?: number | null;
  dni?: string | null;
  antiguedad?: dayjs.Dayjs | null;
  salario?: number | null;
  comision?: number | null;
}

export type NewVendedor = Omit<IVendedor, 'id'> & { id: null };
