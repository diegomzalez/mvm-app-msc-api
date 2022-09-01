import { Controller, Get } from '@nestjs/common';
import Endpoint from '../../../endpoints/Endpoint';

@Controller(Endpoint.usersEndpoint)
export class UsersController {
  @Get()
  hello() {
    return 'Hello';
  }
}
