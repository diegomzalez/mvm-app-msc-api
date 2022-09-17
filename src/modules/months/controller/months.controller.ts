import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Types } from 'mongoose';
import Endpoint from '../../../endpoint/Endpoint';
import {
  CreateMonthDto,
  FilterMonthDto,
  UpdateMonthDto,
} from '../dto/Month.dto';
import Month from '../entity/Month.entity';
import { MonthsService } from '../service/months.service';

@Controller(Endpoint.monthsEndpoint)
export class MonthsController {
  constructor(private readonly monthsService: MonthsService) {}

  @Get()
  async getMonths(@Query() params?: FilterMonthDto): Promise<Month[]> {
    return await this.monthsService.getMonths(params);
  }

  @Post()
  async postMonth(@Body() month: CreateMonthDto): Promise<Month> {
    return await this.monthsService.postMonth(month);
  }

  @Get(':id')
  async getMonth(@Param('id') id: Types.ObjectId): Promise<Month> {
    return await this.monthsService.getMonth(id);
  }

  @Put(':id')
  async updateMonth(
    @Param('id') id: Types.ObjectId,
    @Body() month: UpdateMonthDto,
  ): Promise<Month> {
    return await this.updateMonth(id, month);
  }

  @Delete(':id')
  async deleteMonth(@Param('id') id: Types.ObjectId): Promise<Month> {
    return await this.monthsService.deleteMonth(id);
  }
}
