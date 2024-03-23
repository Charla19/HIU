import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserStore } from 'src/entities/UserStore';
import { Repository } from 'typeorm';
import { BodyReponseDto, BodyRequestDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserStore)
        private  userStoreRepository: Repository<UserStore>,
        private jwtService: JwtService
    ) {}

    private async signAuth(user: UserStore): Promise<string> {
        return await this.jwtService.signAsync({ id: user.id });
    }

    async signIn(data: BodyRequestDto): Promise<BodyReponseDto> {
        const result: UserStore = await this.userStoreRepository
        .createQueryBuilder('u')
        .select([
            'u.id as id'
        ])
        .where(`u.email=:identifiant AND u.password=TEXT(SHA512(:password))`, {
            identifiant: data.identifiant,
            password: data.password
        })
        .getRawOne();
        if(!result) throw new UnauthorizedException('Credentials incorrects !');
        return {
            user_uuid: result.id,
            access_token: await this.signAuth(result)
        };
    }
}
