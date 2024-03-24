CREATE ROLE anonyma nologin;

CREATE TABLE IF NOT EXISTS public.user_store(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    fist_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    pseudo varchar(255),
    password text,
    img_url text,
    created_at timestamp without time zone DEFAULT now(),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS public.home_store(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    label varchar(255),
    latitude integer,
    longitude integer,
    uptime integer,
    status boolean,
    created_at timestamp without time zone DEFAULT now(),
    user_store_id uuid,
    current_energy_consumption integer,
    PRIMARY KEY(id),
    CONSTRAINT fk_home_store_user_store_id FOREIGN key(user_store_id) REFERENCES user_store(id)
);

CREATE TABLE IF NOT EXISTS public.weather_store(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    temperature integer,
    precipitation integer,
    rain integer,
    wind_speed integer,
    created_at timestamp without time zone DEFAULT now(),
    home_store_id uuid,
    humidity integer,
    PRIMARY KEY(id),
    CONSTRAINT fk_weather_store_home_store_id FOREIGN key(home_store_id) REFERENCES home_store(id)
);

CREATE TABLE IF NOT EXISTS public.home_historic(
    home_historic uuid NOT NULL DEFAULT gen_random_uuid(),
    start_date timestamp without time zone,
    end_date timestamp without time zone,
    created_at timestamp without time zone DEFAULT now(),
    home_store_id uuid,
    PRIMARY KEY(home_historic),
    CONSTRAINT FK_home_historic_home_store_id FOREIGN key(home_store_id) REFERENCES home_store(id)
);

CREATE TABLE IF NOT EXISTS public.energy_consumption_historic(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    energy integer,
    created_at timestamp without time zone DEFAULT now(),
    home_store_id uuid,
    PRIMARY KEY(id),
    CONSTRAINT fk_energy_consumption_historic_home_store_id FOREIGN key(home_store_id) REFERENCES home_store(id)
);

CREATE TABLE IF NOT EXISTS public.devices_store(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    label varchar(255),
    created_at timestamp without time zone DEFAULT now(),
    home_store_id uuid,
    status boolean,
    PRIMARY KEY(id),
    CONSTRAINT fk_devices_store_home_store_id FOREIGN key(home_store_id) REFERENCES home_store(id)
);

GRANT USAGE ON SCHEMA public TO anonyma;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO anonyma;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO anonyma;
