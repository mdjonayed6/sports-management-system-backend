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
import { InjuryEntity } from './entities/injury.entity';
import { EquipmentEntity } from './entities/equipment.entity';
import { ContentEntity } from './entities/content.entity';
import { ScoutingEntity } from './entities/scouting.entity';
import { ComplianceEntity } from './entities/compliance.entity';
import { AccessEntity } from './entities/access.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'sports_management_system',
    entities: [UserEntity,TeamEntity,PlayerEntity,CoachEntity,ScheduleEntity,FacilityEntity,FinanceEntity,CommunicationEntity,PerformanceEntity,InjuryEntity,EquipmentEntity,ContentEntity,ScoutingEntity,ComplianceEntity,AccessEntity],
    synchronize: true
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
