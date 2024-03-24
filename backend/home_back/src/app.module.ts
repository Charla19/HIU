import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { AuthModule } from './auth/auth.module';
import { WeatherModule } from './weather/weather.module';
import { OllamaModule } from './ollama/ollama.module';
import { EnergyModule } from './energy/energy.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env["DB_HOST"],
        port: +process.env["DB_PORT"],
        username: process.env["DB_USERNAME"],
        password: process.env["DB_PASSWORD"],
        database: process.env["DB_NAME"],
        schema: process.env["DB_SCHEMA"],
        entities: [__dirname + "/entities/*.js"],
        // autoLoadEntities: true,
        synchronize: true,
      })
    }),
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads')
    }),
    WeatherModule,
    OllamaModule,
    EnergyModule,
  ]
})
export class AppModule {}
