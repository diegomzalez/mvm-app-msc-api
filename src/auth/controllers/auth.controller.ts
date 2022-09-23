import { Controller } from '@nestjs/common';
import Endpoint from '../../endpoint/Endpoint';

@Controller(Endpoint.authEndpoint)
export class AuthController {}
