import { Body, Controller, Post } from '@nestjs/common';
import { GoogleAuthenticationService } from './google-authentication.service';
import { AuthType } from 'src/iam/enums/auth-type.enum';
import { Auth } from 'src/iam/decorators/auth.decorator';
import { GoogleTokenDto } from '../dto/google-token.dto';

@Auth(AuthType.None)
@Controller('authentication/google')
export class GoogleAuthenticationController {
    constructor(
        private readonly googleAuthService: GoogleAuthenticationService,
    ) { }

    @Post()
    authenticate(@Body() tokenDto: GoogleTokenDto) {
        console.log(tokenDto.token);
        return this.googleAuthService.authenticate(tokenDto.token);
    }
}