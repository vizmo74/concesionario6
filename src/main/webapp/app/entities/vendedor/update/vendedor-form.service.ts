import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { IVendedor, NewVendedor } from '../vendedor.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IVendedor for edit and NewVendedorFormGroupInput for create.
 */
type VendedorFormGroupInput = IVendedor | PartialWithRequiredKeyOf<NewVendedor>;

/**
 * Type that converts some properties for forms.
 */
type FormValueOf<T extends IVendedor | NewVendedor> = Omit<T, 'antiguedad'> & {
  antiguedad?: string | null;
};

type VendedorFormRawValue = FormValueOf<IVendedor>;

type NewVendedorFormRawValue = FormValueOf<NewVendedor>;

type VendedorFormDefaults = Pick<NewVendedor, 'id' | 'antiguedad'>;

type VendedorFormGroupContent = {
  id: FormControl<VendedorFormRawValue['id'] | NewVendedor['id']>;
  nombre: FormControl<VendedorFormRawValue['nombre']>;
  apellidos: FormControl<VendedorFormRawValue['apellidos']>;
  email: FormControl<VendedorFormRawValue['email']>;
  telefono: FormControl<VendedorFormRawValue['telefono']>;
  dni: FormControl<VendedorFormRawValue['dni']>;
  antiguedad: FormControl<VendedorFormRawValue['antiguedad']>;
  salario: FormControl<VendedorFormRawValue['salario']>;
  comision: FormControl<VendedorFormRawValue['comision']>;
};

export type VendedorFormGroup = FormGroup<VendedorFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class VendedorFormService {
  createVendedorFormGroup(vendedor: VendedorFormGroupInput = { id: null }): VendedorFormGroup {
    const vendedorRawValue = this.convertVendedorToVendedorRawValue({
      ...this.getFormDefaults(),
      ...vendedor,
    });
    return new FormGroup<VendedorFormGroupContent>({
      id: new FormControl(
        { value: vendedorRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      nombre: new FormControl(vendedorRawValue.nombre, {
        validators: [Validators.required],
      }),
      apellidos: new FormControl(vendedorRawValue.apellidos, {
        validators: [Validators.required],
      }),
      email: new FormControl(vendedorRawValue.email),
      telefono: new FormControl(vendedorRawValue.telefono, {
        validators: [Validators.required],
      }),
      dni: new FormControl(vendedorRawValue.dni, {
        validators: [Validators.required],
      }),
      antiguedad: new FormControl(vendedorRawValue.antiguedad, {
        validators: [Validators.required],
      }),
      salario: new FormControl(vendedorRawValue.salario, {
        validators: [Validators.required],
      }),
      comision: new FormControl(vendedorRawValue.comision, {
        validators: [Validators.required],
      }),
    });
  }

  getVendedor(form: VendedorFormGroup): IVendedor | NewVendedor {
    return this.convertVendedorRawValueToVendedor(form.getRawValue() as VendedorFormRawValue | NewVendedorFormRawValue);
  }

  resetForm(form: VendedorFormGroup, vendedor: VendedorFormGroupInput): void {
    const vendedorRawValue = this.convertVendedorToVendedorRawValue({ ...this.getFormDefaults(), ...vendedor });
    form.reset(
      {
        ...vendedorRawValue,
        id: { value: vendedorRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): VendedorFormDefaults {
    const currentTime = dayjs();

    return {
      id: null,
      antiguedad: currentTime,
    };
  }

  private convertVendedorRawValueToVendedor(rawVendedor: VendedorFormRawValue | NewVendedorFormRawValue): IVendedor | NewVendedor {
    return {
      ...rawVendedor,
      antiguedad: dayjs(rawVendedor.antiguedad, DATE_TIME_FORMAT),
    };
  }

  private convertVendedorToVendedorRawValue(
    vendedor: IVendedor | (Partial<NewVendedor> & VendedorFormDefaults)
  ): VendedorFormRawValue | PartialWithRequiredKeyOf<NewVendedorFormRawValue> {
    return {
      ...vendedor,
      antiguedad: vendedor.antiguedad ? vendedor.antiguedad.format(DATE_TIME_FORMAT) : undefined,
    };
  }
}
