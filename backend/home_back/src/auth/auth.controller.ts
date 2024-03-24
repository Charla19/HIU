import { Body, Controller, NotAcceptableException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BodyAuthRequestDto } from './dto/auth.dto';

@Controller('authentication')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('')
    async signIn(@Body() data: BodyAuthRequestDto) {
        if(!data.identifiant || !data.password) throw new NotAcceptableException('Credentials incorrects');
        return await this.authService.signIn(data);
    }
}
