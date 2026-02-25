import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userData: Partial<User>) {
    return this.usersService.create(userData);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

}

// User controller, maneja las rutas de usuarios
// se encarga de recibir las peticiones HTTP y delegar la logica al servicio
// es inyectado en el modulo para ser utilizado en las rutas.
// User guards para proteger las rutas
// solo usuarios autenticados pueden acceder a ciertas rutas.