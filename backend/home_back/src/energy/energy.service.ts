import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnergyConsumptionHistoric } from 'src/entities/EnergyConsumptionHistoric';
import { HomeStore } from 'src/entities/HomeStore';
import { Repository } from 'typeorm';

@Injectable()
export class EnergyService {
    
    constructor(
        @InjectRepository(EnergyConsumptionHistoric)
        private energyConsumptionHistoricRepository: Repository<EnergyConsumptionHistoric>,
    ) {}

    async findEnergieStatistic(home_store_id: string): Promise<EnergyConsumptionHistoric[]> {
        return await this.energyConsumptionHistoricRepository
            .createQueryBuilder('e')
            .select([
                "TO_CHAR(e.created_at, 'Mon YYYY') AS date",
                "e.energy"
            ])
            .innerJoin(HomeStore, 'h', 'h.id = e.home_store_id')
            .where(`e.home_store_id=:home_store_id`, { home_store_id })
            .orderBy("e.created_at", "ASC")
            .getRawMany();
    }
}
