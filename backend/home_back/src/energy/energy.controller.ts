import { Controller, Get, Param } from '@nestjs/common';
import { EnergyService } from './energy.service';
import { ParamHomeStoreIdDto } from './dto/energy.dto';

@Controller('energy')
export class EnergyController {

    constructor(
        private readonly energyService: EnergyService 
    ) {}

    @Get("statistic/:home_store_id")
    async getStatistics(@Param() data: ParamHomeStoreIdDto) {
        return await this.energyService.findEnergieStatistic(data.home_store_id);
    }
}
