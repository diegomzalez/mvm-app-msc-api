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

import { mongoId } from '../../../types/mongo-id.type';
import { MongoIdPipe } from '../../../common/mongo-id.pipe';
import Endpoint from '../../../endpoint/endpoint';
import {
  AddBillsDto,
  CreateMonthDto,
  deleteBillsDto,
  FilterMonthDto,
  UpdateMonthDto,
} from '../dto/month.dto';
import { MonthsService } from '../service/months.service';
import { MonthType } from '../types/month.type';
import { ApiTags } from '@nestjs/swagger';
import { MonthTypeArray } from '../types/month-array.type';

@ApiTags('months')
@Controller(Endpoint.monthsEndpoint)
export class MonthsController {
  constructor(private readonly monthsService: MonthsService) {}

  @Get()
  async getMonths(@Query() params?: FilterMonthDto): MonthTypeArray {
    return await this.monthsService.getMonths(params);
  }

  @Post()
  async postMonth(@Body() monthData: CreateMonthDto): MonthType {
    return await this.monthsService.postMonth(monthData);
  }

  @Get(':monthId')
  async getMonth(@Param('monthId') monthId: mongoId): MonthType {
    return await this.monthsService.getMonth(monthId);
  }

  @Put(':monthId')
  async updateMonth(
    @Param('monthId') monthId: mongoId,
    @Body() monthData: UpdateMonthDto,
  ): MonthType {
    return await this.monthsService.updateMonth(monthId, monthData);
  }

  @Put(':monthId/bills')
  async addBills(
    @Param('monthId', MongoIdPipe) monthId: mongoId,
    @Body() billId: AddBillsDto,
  ): MonthType {
    return await this.monthsService.addBills(monthId, billId);
  }

  @Delete(':monthId')
  async deleteMonth(@Param('monthId') monthId: mongoId): MonthType {
    return await this.monthsService.deleteMonth(monthId);
  }

  @Delete(':monthId/bills')
  async deleteBills(
    @Param('monthId', MongoIdPipe) monthId: mongoId,
    @Body() billsId: deleteBillsDto,
  ): MonthType {
    return await this.monthsService.deleteBills(monthId, billsId);
  }
}
