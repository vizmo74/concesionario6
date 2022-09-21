package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mycompany.myapp.domain.enumeration.Combustible;
import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Vehiculo.
 */
@Entity
@Table(name = "vehiculo")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Vehiculo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "marca", nullable = false)
    private String marca;

    @NotNull
    @Column(name = "modelo", nullable = false)
    private String modelo;

    @NotNull
    @Column(name = "precio", nullable = false)
    private Double precio;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "tipo", nullable = false)
    private Combustible tipo;

    @Column(name = "hibrido")
    private Boolean hibrido;

    @Column(name = "reservado")
    private Boolean reservado;

    @JsonIgnoreProperties(value = { "vehiculo", "cliente", "vendedor" }, allowSetters = true)
    @OneToOne(mappedBy = "vehiculo")
    private Venta venta;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Vehiculo id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMarca() {
        return this.marca;
    }

    public Vehiculo marca(String marca) {
        this.setMarca(marca);
        return this;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return this.modelo;
    }

    public Vehiculo modelo(String modelo) {
        this.setModelo(modelo);
        return this;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Double getPrecio() {
        return this.precio;
    }

    public Vehiculo precio(Double precio) {
        this.setPrecio(precio);
        return this;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Combustible getTipo() {
        return this.tipo;
    }

    public Vehiculo tipo(Combustible tipo) {
        this.setTipo(tipo);
        return this;
    }

    public void setTipo(Combustible tipo) {
        this.tipo = tipo;
    }

    public Boolean getHibrido() {
        return this.hibrido;
    }

    public Vehiculo hibrido(Boolean hibrido) {
        this.setHibrido(hibrido);
        return this;
    }

    public void setHibrido(Boolean hibrido) {
        this.hibrido = hibrido;
    }

    public Boolean getReservado() {
        return this.reservado;
    }

    public Vehiculo reservado(Boolean reservado) {
        this.setReservado(reservado);
        return this;
    }

    public void setReservado(Boolean reservado) {
        this.reservado = reservado;
    }

    public Venta getVenta() {
        return this.venta;
    }

    public void setVenta(Venta venta) {
        if (this.venta != null) {
            this.venta.setVehiculo(null);
        }
        if (venta != null) {
            venta.setVehiculo(this);
        }
        this.venta = venta;
    }

    public Vehiculo venta(Venta venta) {
        this.setVenta(venta);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Vehiculo)) {
            return false;
        }
        return id != null && id.equals(((Vehiculo) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Vehiculo{" +
            "id=" + getId() +
            ", marca='" + getMarca() + "'" +
            ", modelo='" + getModelo() + "'" +
            ", precio=" + getPrecio() +
            ", tipo='" + getTipo() + "'" +
            ", hibrido='" + getHibrido() + "'" +
            ", reservado='" + getReservado() + "'" +
            "}";
    }
}
