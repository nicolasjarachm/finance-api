import { Controller, Get, Post, Body, UseGuards, Request, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userData: Partial<User>) {
    return this.usersService.create(userData);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Req() req) {
    return this.usersService.findById(req.user.userId);
}


}

// User controller, maneja las rutas de usuarios
// se encarga de recibir las peticiones HTTP y delegar la logica al servicio
// es inyectado en el modulo para ser utilizado en las rutas.
// User guards para proteger las rutas
// solo usuarios autenticados pueden acceder a ciertas rutas.