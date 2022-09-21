import { ICliente, NewCliente } from './cliente.model';

export const sampleWithRequiredData: ICliente = {
  id: 45820,
  nombre: 'Cataluña',
  apellidos: 'Mascotas',
  telefono: 'grow y',
  dni: 'robust Andalucía synthesize',
};

export const sampleWithPartialData: ICliente = {
  id: 9907,
  nombre: 'Universal',
  apellidos: 'sexy Plástico JBOD',
  telefono: 'wireless Qatari',
  dni: 'back-end',
};

export const sampleWithFullData: ICliente = {
  id: 52451,
  nombre: 'Acero withdrawal',
  apellidos: 'Avon haptic Mesa',
  email: 'Mariano_Trejo@gmail.com',
  telefono: 'streamline HTTP invoice',
  dni: 'Samoa',
};

export const sampleWithNewData: NewCliente = {
  nombre: 'reinvent frictionless',
  apellidos: 'Intercambiable Comodos Librería',
  telefono: 'deliverables Gris',
  dni: 'withdrawal optimizada Increible',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
