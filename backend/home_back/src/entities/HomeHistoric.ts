import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { HomeStore } from "./HomeStore";

@Index("home_historic_pkey", ["homeHistoric"], { unique: true })
@Entity("home_historic", { schema: "public" })
export class HomeHistoric {
  @Column("uuid", {
    primary: true,
    name: "home_historic",
    default: () => "gen_random_uuid()",
  })
  homeHistoric: string;

  @Column("timestamp without time zone", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Column("timestamp without time zone", { name: "end_date", nullable: true })
  endDate: Date | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @ManyToOne(() => HomeStore, (homeStore) => homeStore.homeHistorics)
  @JoinColumn([{ name: "home_store_id", referencedColumnName: "id" }])
  homeStore: HomeStore;
}
