import { Combustible } from 'app/entities/enumerations/combustible.model';

import { IVehiculo, NewVehiculo } from './vehiculo.model';

export const sampleWithRequiredData: IVehiculo = {
  id: 59193,
  marca: 'HTTP',
  modelo: 'Negro neutral',
  precio: 3559,
  tipo: Combustible['Diesel'],
};

export const sampleWithPartialData: IVehiculo = {
  id: 78394,
  marca: 'mindshare Escudo Verde',
  modelo: 'Hogar',
  precio: 23232,
  tipo: Combustible['Electrico'],
  hibrido: false,
  reservado: false,
};

export const sampleWithFullData: IVehiculo = {
  id: 10764,
  marca: 'bypass Acero Humano',
  modelo: 'navigate deposit',
  precio: 35751,
  tipo: Combustible['Electrico'],
  hibrido: true,
  reservado: false,
};

export const sampleWithNewData: NewVehiculo = {
  marca: 'Malta Valenciana',
  modelo: 'integrated',
  precio: 37448,
  tipo: Combustible['Diesel'],
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
