import { Body, Controller, NotAcceptableException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BodyRequestDto } from './dto/auth.dto';

@Controller('authentication')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('')
    async signIn(@Body() data: BodyRequestDto) {
        if(!data.identifiant || !data.password) throw new NotAcceptableException('Credentials incorrects');
        return await this.authService.signIn(data);
    }
}
