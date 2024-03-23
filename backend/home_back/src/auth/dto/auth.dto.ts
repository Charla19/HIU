import { ApiProperty } from "@nestjs/swagger";

export class BodyRequestDto {
    @ApiProperty()
    identifiant: string;

    @ApiProperty()
    password: string;
}

export class BodyReponseDto {
    user_uuid: string;
    access_token: string;
}
