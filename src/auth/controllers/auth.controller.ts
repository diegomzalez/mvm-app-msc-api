import { Controller } from '@nestjs/common';
import Endpoint from '../../endpoint/endpoint';

@Controller(Endpoint.authEndpoint)
export class AuthController {}
