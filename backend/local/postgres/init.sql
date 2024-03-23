-- Active: 1711198324746@@127.0.0.1@5431@home@public
CREATE ROLE IF NOT EXISTS anonyma;

CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE IF NOT EXISTS public.user_store(
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    fist_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    pseudo VARCHAR(255),
    password TEXT,
    base64_image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.home_store(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    label VARCHAR(255),
    latitude INTEGER,
    longitude INTEGER,
    uptime INTEGER,
    user_store_id UUID,
    status BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_store_id_home_store FOREIGN KEY (user_store_id) REFERENCES user_store(id)
);

CREATE TABLE IF NOT EXISTS public.devices_store(
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    label VARCHAR(255),
    home_store_id UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_home_store_id_devices_store FOREIGN KEY (home_store_id) REFERENCES home_store(id)
);

-- CREATE TABLE IF NOT EXISTS public.weather(

-- );

CREATE TABLE IF NOT EXISTS public.home_historic(
    home_historic UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    home_store_id UUID,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_home_store_id_home_historic FOREIGN KEY (home_store_id) REFERENCES home_store(id)
);

GRANT USAGE ON SCHEMA public TO anonyma;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO anonyma;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO anonyma;
