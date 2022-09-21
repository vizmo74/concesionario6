package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * The Vendedor entity.
 */
@Schema(description = "The Vendedor entity.")
@Entity
@Table(name = "vendedor")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Vendedor implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    /**
     * The firstname attribute.
     */
    @Schema(description = "The firstname attribute.", required = true)
    @NotNull
    @Column(name = "nombre", nullable = false)
    private String nombre;

    @NotNull
    @Column(name = "apellidos", nullable = false)
    private String apellidos;

    @Column(name = "email")
    private String email;

    @NotNull
    @Column(name = "telefono", nullable = false)
    private Integer telefono;

    @NotNull
    @Column(name = "dni", nullable = false)
    private String dni;

    @NotNull
    @Column(name = "antiguedad", nullable = false)
    private Instant antiguedad;

    @NotNull
    @Column(name = "salario", nullable = false)
    private Double salario;

    @NotNull
    @Column(name = "comision", nullable = false)
    private Double comision;

    @OneToMany(mappedBy = "vendedor")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "vehiculo", "cliente", "vendedor" }, allowSetters = true)
    private Set<Venta> ventas = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Vendedor id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public Vendedor nombre(String nombre) {
        this.setNombre(nombre);
        return this;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return this.apellidos;
    }

    public Vendedor apellidos(String apellidos) {
        this.setApellidos(apellidos);
        return this;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return this.email;
    }

    public Vendedor email(String email) {
        this.setEmail(email);
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getTelefono() {
        return this.telefono;
    }

    public Vendedor telefono(Integer telefono) {
        this.setTelefono(telefono);
        return this;
    }

    public void setTelefono(Integer telefono) {
        this.telefono = telefono;
    }

    public String getDni() {
        return this.dni;
    }

    public Vendedor dni(String dni) {
        this.setDni(dni);
        return this;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public Instant getAntiguedad() {
        return this.antiguedad;
    }

    public Vendedor antiguedad(Instant antiguedad) {
        this.setAntiguedad(antiguedad);
        return this;
    }

    public void setAntiguedad(Instant antiguedad) {
        this.antiguedad = antiguedad;
    }

    public Double getSalario() {
        return this.salario;
    }

    public Vendedor salario(Double salario) {
        this.setSalario(salario);
        return this;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }

    public Double getComision() {
        return this.comision;
    }

    public Vendedor comision(Double comision) {
        this.setComision(comision);
        return this;
    }

    public void setComision(Double comision) {
        this.comision = comision;
    }

    public Set<Venta> getVentas() {
        return this.ventas;
    }

    public void setVentas(Set<Venta> ventas) {
        if (this.ventas != null) {
            this.ventas.forEach(i -> i.setVendedor(null));
        }
        if (ventas != null) {
            ventas.forEach(i -> i.setVendedor(this));
        }
        this.ventas = ventas;
    }

    public Vendedor ventas(Set<Venta> ventas) {
        this.setVentas(ventas);
        return this;
    }

    public Vendedor addVenta(Venta venta) {
        this.ventas.add(venta);
        venta.setVendedor(this);
        return this;
    }

    public Vendedor removeVenta(Venta venta) {
        this.ventas.remove(venta);
        venta.setVendedor(null);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Vendedor)) {
            return false;
        }
        return id != null && id.equals(((Vendedor) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Vendedor{" +
            "id=" + getId() +
            ", nombre='" + getNombre() + "'" +
            ", apellidos='" + getApellidos() + "'" +
            ", email='" + getEmail() + "'" +
            ", telefono=" + getTelefono() +
            ", dni='" + getDni() + "'" +
            ", antiguedad='" + getAntiguedad() + "'" +
            ", salario=" + getSalario() +
            ", comision=" + getComision() +
            "}";
    }
}
