import { Controller } from '@nestjs/common';
import Endpoint from '../../../endpoints/Endpoint';

@Controller(Endpoint.parentsEndpoint)
export class ParentsController {}
