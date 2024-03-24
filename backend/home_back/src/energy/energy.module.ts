import { Module } from '@nestjs/common';
import { EnergyService } from './energy.service';
import { EnergyController } from './energy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnergyConsumptionHistoric } from 'src/entities/EnergyConsumptionHistoric';
import { HomeStore } from 'src/entities/HomeStore';

@Module({
  imports: [
    TypeOrmModule.forFeature([EnergyConsumptionHistoric, HomeStore])
  ],
  providers: [EnergyService],
  controllers: [EnergyController]
})
export class EnergyModule {}
