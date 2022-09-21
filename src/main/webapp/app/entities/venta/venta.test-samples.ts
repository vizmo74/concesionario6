import dayjs from 'dayjs/esm';

import { IVenta, NewVenta } from './venta.model';

export const sampleWithRequiredData: IVenta = {
  id: 20448,
  impuesto: 11440,
  total: 79952,
  fecha: dayjs('2022-09-21'),
};

export const sampleWithPartialData: IVenta = {
  id: 4145,
  impuesto: 56225,
  total: 71903,
  fecha: dayjs('2022-09-21'),
};

export const sampleWithFullData: IVenta = {
  id: 41728,
  descuento: 17570,
  impuesto: 22299,
  total: 92865,
  fecha: dayjs('2022-09-21'),
};

export const sampleWithNewData: NewVenta = {
  impuesto: 66349,
  total: 29440,
  fecha: dayjs('2022-09-21'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
