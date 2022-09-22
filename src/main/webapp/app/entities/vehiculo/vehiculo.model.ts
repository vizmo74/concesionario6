import { Combustible } from 'app/entities/enumerations/combustible.model';

export interface IVehiculo {
  id: number;
  marca?: string | null;
  modelo?: string | null;
  precio?: number | null;
  tipo?: Combustible | null;
  hibrido?: boolean | null;
  reservado?: boolean | null;
  autoShift?: boolean | null;

}

export type NewVehiculo = Omit<IVehiculo, 'id'> & { id: null };
