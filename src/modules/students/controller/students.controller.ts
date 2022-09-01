import { Controller } from '@nestjs/common';
import Endpoint from '../../../endpoints/Endpoint';

@Controller(Endpoint.studentsEndpoint)
export class StudentsController {}
