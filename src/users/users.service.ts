import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //userService.create()
  //este método es lo que necesita el
  //AuthService.register() para crear un nuevo usuario
  async create(userData: Partial<User>) {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async findAll() {
    return this.userRepository.find();
  }
//.addSelect('user.password') ->
//Esto protege el password en respuestas normales
//solo lo muestra cuando lo necesita para login
  async findByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password', 'role'],
    });

  }

  async findById(id: number) {
    return this.userRepository.findOne({
      where: { id },
    });
}

}

// User services, maneja usuarios
// se encarga de la logica de negocio
// se comunica con la base de datos a traves del repositorio
// es inyectado en el controlador para ser utilizado en las rutas.