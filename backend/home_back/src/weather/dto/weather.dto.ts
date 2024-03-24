import { ApiProperty } from "@nestjs/swagger";

export class CurrentDto {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    is_day: number;
    precipitation: number;
    rain: number;
    cloud_cover: number;
    surface_pressure: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
}

export class CurrentunitsDto {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    is_day: string;
    precipitation: string;
    rain: string;
    cloud_cover: string;
    surface_pressure: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
}

export class WeatherResponseDto {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: CurrentunitsDto;
    current: CurrentDto;
}

export class ParamHomeStoreIdDto {
    @ApiProperty()
    home_store_id: string;
}