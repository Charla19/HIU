import { Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserStore } from 'src/entities/UserStore';
import { Repository } from 'typeorm';
import { BodyAuthReponseDto, BodyAuthRequestDto, BodySignUpRequestDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserStore)
        private  userStoreRepository: Repository<UserStore>,
        private jwtService: JwtService
    ) {}

    private async signAuth(user_store_id: string): Promise<string> {
        return await this.jwtService.signAsync({ user_store_id });
    }

    async signIn(data: BodyAuthRequestDto): Promise<BodyAuthReponseDto> {
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
            access_token: await this.signAuth(result.id)
        };
    }

    async signUp(data: BodySignUpRequestDto): Promise<BodyAuthReponseDto> {
        const result = await this.userStoreRepository
            .createQueryBuilder('u')
            .insert()
            .into(UserStore)
            .values({
                fistName: data.fist_name,
                lastName: data.last_name,
                email: data.email,
                pseudo: data.pseudo,
                password: () => "SHA512('" + data.password + "')"
            }).execute();

        if(!result.identifiers[0].id) throw new NotAcceptableException("Credentials incorrects...");
        return {
            user_uuid: result.identifiers[0].id,
            access_token: await this.signAuth(result.identifiers[0].id)
        };
    }
}
