export interface ICliente {
  id: number;
  nombre?: string | null;
  apellidos?: string | null;
  email?: string | null;
  telefono?: string | null;
  dni?: string | null;
}

export type NewCliente = Omit<ICliente, 'id'> & { id: null };
