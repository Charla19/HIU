import { Exclude } from 'class-transformer';
import { Column, Entity, Index, OneToMany } from "typeorm";
import { HomeStore } from "./HomeStore";

@Index("user_store_pkey", ["id"], { unique: true })
@Entity("user_store", { schema: "public" })
export class UserStore {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", {
    name: "fist_name",
    nullable: true,
    length: 255,
  })
  fistName: string | null;

  @Column("character varying", {
    name: "last_name",
    nullable: true,
    length: 255,
  })
  lastName: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("character varying", { name: "pseudo", nullable: true, length: 255 })
  pseudo: string | null;

  @Exclude()
  @Column("text", { name: "password", nullable: true })
  password: string | null;

  @Exclude()
  @Column("text", { name: "img_url", nullable: true })
  imgUrl: string | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @OneToMany(() => HomeStore, (homeStore) => homeStore.userStore)
  homeStores: HomeStore[];
}
