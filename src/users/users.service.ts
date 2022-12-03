import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(input: { email: string; password: string; name: string }) {
    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        password: input.password,
      },
    });
    return user;
  }
  async findOne(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  }
}
