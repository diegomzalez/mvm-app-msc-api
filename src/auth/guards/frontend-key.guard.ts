import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { Observable } from 'rxjs';

interface Config {
  http: HttpConfig;
}

interface HttpConfig {
  frontendKey: string;
  host: string;
  port: number;
}

@Injectable()
export class FrontendKeyGuard implements CanActivate {
  constructor(private configService: ConfigService<Config>) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('frontendKey');
    const frontendKey = this.configService.get<Config>('http.frontendKey', {
      infer: true,
    });
    const isAuth = authHeader === frontendKey;
    if (!isAuth) {
      throw new UnauthorizedException('Request Unauthorized');
    }
    return true;
  }
}
