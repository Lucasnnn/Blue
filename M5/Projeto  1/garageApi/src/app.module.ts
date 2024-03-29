import { Module } from '@nestjs/common';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';
import { DatabaseModule } from './prisma/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
