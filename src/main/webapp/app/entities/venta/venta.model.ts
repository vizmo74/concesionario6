import dayjs from 'dayjs/esm';
import { IVehiculo } from 'app/entities/vehiculo/vehiculo.model';
import { ICliente } from 'app/entities/cliente/cliente.model';
import { IVendedor } from 'app/entities/vendedor/vendedor.model';

export interface IVenta {
  id: number;
  descuento?: number | null;
  impuesto?: number | null;
  total?: number | null;
  fecha?: dayjs.Dayjs | null;
  vehiculo?: Pick<IVehiculo, 'id'> | null;
  cliente?: Pick<ICliente, 'id'> | null;
  vendedor?: Pick<IVendedor, 'id'> | null;
}

export type NewVenta = Omit<IVenta, 'id'> & { id: null };
