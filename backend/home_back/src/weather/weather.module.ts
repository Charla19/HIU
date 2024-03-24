import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeStore } from 'src/entities/HomeStore';
import { WeatherStore } from 'src/entities/WeatherStore';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([HomeStore, WeatherStore])
  ],
  providers: [WeatherService],
  controllers: [WeatherController]
})
export class WeatherModule {}
