import { ApiProperty } from "@nestjs/swagger";

export class BodyAuthRequestDto {
    @ApiProperty()
    identifiant: string;

    @ApiProperty()
    password: string;
}

export class BodyAuthReponseDto {
    user_uuid: string;
    access_token: string;
}

export class BodySignUpRequestDto {
    fist_name: string;
    last_name: string;
    email: string;
    pseudo: string;
    password: string;
}
