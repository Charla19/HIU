import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { DevicesStore } from "./DevicesStore";
import { HomeHistoric } from "./HomeHistoric";
import { UserStore } from "./UserStore";

@Index("home_store_pkey", ["id"], { unique: true })
@Entity("home_store", { schema: "public" })
export class HomeStore {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", { name: "label", nullable: true, length: 255 })
  label: string | null;

  @Column("integer", { name: "latitude", nullable: true })
  latitude: number | null;

  @Column("integer", { name: "longitude", nullable: true })
  longitude: number | null;

  @Column("integer", { name: "uptime", nullable: true })
  uptime: number | null;

  @Column("boolean", { name: "status", nullable: true })
  status: boolean | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @OneToMany(() => DevicesStore, (devicesStore) => devicesStore.homeStore)
  devicesStores: DevicesStore[];

  @OneToMany(() => HomeHistoric, (homeHistoric) => homeHistoric.homeStore)
  homeHistorics: HomeHistoric[];

  @ManyToOne(() => UserStore, (userStore) => userStore.homeStores)
  @JoinColumn([{ name: "user_store_id", referencedColumnName: "id" }])
  userStore: UserStore;
}
