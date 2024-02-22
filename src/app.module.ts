import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { TeamEntity } from './entities/team.entity ';
import { PlayerEntity } from './entities/player.entity';
import { CoachEntity } from './entities/coach.entity';
import { ScheduleEntity } from './entities/schedule.entity';
import { FacilityEntity } from './entities/facility.entity';
import { FinanceEntity } from './entities/finance.entity';
import { CommunicationEntity } from './entities/communication.entity';
import { PerformanceEntity } from './entities/performance.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'sports_management_system',
    entities: [UserEntity,TeamEntity,PlayerEntity,CoachEntity,ScheduleEntity,FacilityEntity,FinanceEntity,CommunicationEntity,PerformanceEntity],
    synchronize: true
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
