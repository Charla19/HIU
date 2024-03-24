import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, from, switchMap, tap } from 'rxjs';
import { WeatherResponseDto } from './dto/weather.dto';
import { AxiosResponse } from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { HomeStore } from 'src/entities/HomeStore';
import { Repository } from 'typeorm';
import { WeatherStore } from 'src/entities/WeatherStore';

@Injectable()
export class WeatherService {

    constructor(
        private readonly httpService: HttpService,
        @InjectRepository(HomeStore)
        private homeStoreRepository: Repository<HomeStore>,
        @InjectRepository(WeatherStore)
        private weatherStoreRepository: Repository<WeatherStore>
    ) {}

    findCurrentWeather(home_store_id: string): Observable<AxiosResponse<WeatherResponseDto>> {
        return from(this.homeStoreRepository.findOneBy({ id: home_store_id })).pipe(
            switchMap(
                (result) => this.httpService.get(
                    `${process.env["WEATHER_API"]}/forecast?latitude=${result.latitude}&longitude=${result.longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m&forecast_days=1`
                )
            ),
            tap(response => this.persistWeather(response.data as WeatherResponseDto))
        );
    }

    private persistWeather(data: WeatherResponseDto): void {
        this.weatherStoreRepository.createQueryBuilder()
        .insert()
        .into(WeatherStore)
        .values({
            temperature: data.current.temperature_2m,
            precipitation:  data.current.precipitation,
            rain: data.current.rain,
            windSpeed: data.current.wind_speed_10m,
            humidity: data.current.relative_humidity_2m
        }).execute();
    }
}
