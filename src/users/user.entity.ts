import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  //Column selecet false
  //hace que el campo password no se incluya
  //en las consultas por defecto,
  //lo que mejora la seguridad al evitar
  //exponer esta información sensible.
  @Column({ select: false })
password: string;

  @Column({ default: 'user' })
  role: string;

  @CreateDateColumn()
  createdAt: Date;
}

// User entity, representa la tabla de usuarios en la base de datos
// define las columnas y sus tipos de datos
// es utilizado por el repositorio para realizar operaciones en la base de datos.