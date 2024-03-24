import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { HomeStore } from "./HomeStore";

@Index("weather_store_pkey", ["id"], { unique: true })
@Entity("weather_store", { schema: "public" })
export class WeatherStore {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("integer", { name: "temperature", nullable: true })
  temperature: number | null;

  @Column("integer", { name: "precipitation", nullable: true })
  precipitation: number | null;

  @Column("integer", { name: "rain", nullable: true })
  rain: number | null;

  @Column("integer", { name: "wind_speed", nullable: true })
  windSpeed: number | null;

  @Column("integer", { name: "humidity", nullable: true })
  humidity: number | null;

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
