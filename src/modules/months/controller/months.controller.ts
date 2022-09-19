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

import { mongoId } from '../../../types/mongoId.type';
import { MongoIdPipe } from '../../../common/mongo-id.pipe';
import Endpoint from '../../../endpoint/Endpoint';
import {
  CreateMonthDto,
  deleteBillsDto,
  FilterMonthDto,
  UpdateMonthDto,
} from '../dto/Month.dto';
import { MonthsService } from '../service/months.service';
import { MonthType, MonthTypeArray } from '../types/Month.type';

@Controller(Endpoint.monthsEndpoint)
export class MonthsController {
  constructor(private readonly monthsService: MonthsService) {}

  @Get()
  async getMonths(@Query() params?: FilterMonthDto): MonthTypeArray {
    return await this.monthsService.getMonths(params);
  }

  @Post()
  async postMonth(@Body() month: CreateMonthDto): MonthType {
    return await this.monthsService.postMonth(month);
  }

  @Get(':id')
  async getMonth(@Param('id') id: mongoId): MonthType {
    return await this.monthsService.getMonth(id);
  }

  @Put(':id')
  async updateMonth(
    @Param('id') id: mongoId,
    @Body() month: UpdateMonthDto,
  ): MonthType {
    return await this.monthsService.updateMonth(id, month);
  }

  @Delete(':id')
  async deleteMonth(@Param('id') id: mongoId): MonthType {
    return await this.monthsService.deleteMonth(id);
  }

  @Delete(':monthId/bills')
  async deleteBills(
    @Param('monthId', MongoIdPipe) monthId: mongoId,
    @Body() billsId: deleteBillsDto,
  ): MonthType {
    return await this.monthsService.deleteBills(monthId, billsId);
  }
}
