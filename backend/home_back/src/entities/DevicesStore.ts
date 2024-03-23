import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { HomeStore } from "./HomeStore";

@Index("devices_store_pkey", ["id"], { unique: true })
@Entity("devices_store", { schema: "public" })
export class DevicesStore {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", { name: "label", nullable: true, length: 255 })
  label: string | null;

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
