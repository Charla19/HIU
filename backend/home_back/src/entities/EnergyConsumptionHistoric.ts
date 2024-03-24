import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { HomeStore } from "./HomeStore";

@Index("energy_consumption_historic_pkey", ["id"], { unique: true })
@Entity("energy_consumption_historic", { schema: "public" })
export class EnergyConsumptionHistoric {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("integer", { name: "energy", nullable: true })
  energy: number | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @ManyToOne(() => HomeStore, (homeStore) => homeStore.devicesStores)
  @JoinColumn([{ name: "home_store_id", referencedColumnName: "id" }])
  homeStore: HomeStore;
}
