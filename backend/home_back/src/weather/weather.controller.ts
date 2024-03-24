import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ParamHomeStoreIdDto } from './dto/weather.dto';

@Controller('weather')
export class WeatherController {

    constructor(
        private readonly weatherService: WeatherService
    ) {}

    @Get('home/:home_store_id')
    findCurrentWeather(@Param() data: ParamHomeStoreIdDto) {
        return this.weatherService.findCurrentWeather(data.home_store_id);
    }
}
