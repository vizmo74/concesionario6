import dayjs from 'dayjs/esm';

import { IVendedor, NewVendedor } from './vendedor.model';

export const sampleWithRequiredData: IVendedor = {
  id: 78413,
  nombre: 'Bacon Bebes Namibia',
  apellidos: 'Pasaje Valenciana',
  telefono: 24483,
  dni: 'Guadalupe deposit',
  antiguedad: dayjs('2022-09-20T17:03'),
  salario: 76179,
  comision: 69142,
};

export const sampleWithPartialData: IVendedor = {
  id: 92138,
  nombre: 'Account Rambla',
  apellidos: 'Plaza Ejecutivo synthesizing',
  telefono: 14198,
  dni: 'Amarillo Ladrillo panel',
  antiguedad: dayjs('2022-09-21T02:57'),
  salario: 86719,
  comision: 18518,
};

export const sampleWithFullData: IVendedor = {
  id: 26869,
  nombre: 'Ensalada Humano',
  apellidos: 'País invoice Berkshire',
  email: 'Elvira_Saavedra37@yahoo.com',
  telefono: 27472,
  dni: 'bidireccional Corporativo Balboa',
  antiguedad: dayjs('2022-09-21T01:44'),
  salario: 3502,
  comision: 59021,
};

export const sampleWithNewData: NewVendedor = {
  nombre: 'Hormigon',
  apellidos: 'wireless Coche JBOD',
  telefono: 30959,
  dni: 'copying multi-byte Dinánmico',
  antiguedad: dayjs('2022-09-21T13:27'),
  salario: 94996,
  comision: 6940,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
