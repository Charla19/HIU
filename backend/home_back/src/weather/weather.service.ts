import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, from, switchMap, tap } from 'rxjs';
import { WeatherResponseDto } from './dto/weather.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HomeStore } from 'src/entities/HomeStore';
import { Repository } from 'typeorm';
import { WeatherStore } from 'src/entities/WeatherStore';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class WeatherService {

    constructor(
        private readonly httpService: HttpService,
        @InjectRepository(HomeStore)
        private homeStoreRepository: Repository<HomeStore>,
        @InjectRepository(WeatherStore)
        private weatherStoreRepository: Repository<WeatherStore>
    ) {}

    async findCurrentWeather(home_store_id: string): Promise<WeatherResponseDto> {
        const result = await this.homeStoreRepository
            .createQueryBuilder('h')
            .select([
                'h.latitude as latitude', 'h.longitude as longitude'
            ])
            .where(`h.id=:identifiant`, {identifiant: home_store_id})
            .getRawOne();
        const response = await axios.get(`${process.env["WEATHER_API"]}/forecast?latitude=${result.latitude}&longitude=${result.longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m&forecast_days=1`);
        return response.data as WeatherResponseDto;
        // await this.persistWeather(data);
        // return data;
    }

    // private async persistWeather(data: WeatherResponseDto): Promise<void> {
    //     console.log(data);
        
    //     await this.weatherStoreRepository.createQueryBuilder()
    //     .insert()
    //     .into(WeatherStore)
    //     .values({
    //         temperature: data.current.temperature_2m,
    //         precipitation:  data.current.precipitation,
    //         rain: data.current.rain,
    //         windSpeed: data.current.wind_speed_10m,
    //         humidity: data.current.relative_humidity_2m
    //     }).execute();
    // }
}
