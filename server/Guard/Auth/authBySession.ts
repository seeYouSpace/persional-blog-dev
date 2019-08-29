import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from '../../Model/User/service';

@Injectable()
export class AuthBySessionGuard implements CanActivate {
    constructor (
        private readonly userService: UserService
    ) {}

    async canActivate(
        context: ExecutionContext,
    ): Promise<any> {
        const request = context.switchToHttp().getRequest();
        if (request.session && request.session.token) {
            // @ts-ignore
            let user = await this.userService.findOne({token: request.session.token});
            if (user) return user;
        }

        throw new UnauthorizedException();
    }
}