import { Controller } from '@nestjs/common';
import Endpoint from '../../../endpoints/Endpoint';

@Controller(Endpoint.representativesEndpoint)
export class RepresentativesController {}
