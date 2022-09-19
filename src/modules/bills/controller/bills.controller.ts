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

import Endpoint from '../../../endpoint/Endpoint';
import { CreateBillDto, FilterBillDto, UpdateBillDto } from '../dto/Bill.dto';
import { BillsService } from '../service/bills.service';
import { BillType, BillTypeArray } from '../types/Bill.types';
import { mongoId } from '../../../types/mongoId.type';

@Controller(Endpoint.billsEndpoint)
export class BillsController {
  constructor(private billsService: BillsService) {}

  @Get()
  async getBills(@Query() params?: FilterBillDto): BillTypeArray {
    return await this.billsService.getBills(params);
  }

  @Post()
  async postBill(@Body() bill: CreateBillDto): BillType {
    return await this.billsService.postBill(bill);
  }

  @Get(':id')
  async getBill(@Param('id') id: mongoId): BillType {
    return await this.billsService.getBill(id);
  }

  @Put(':id')
  async updateBill(
    @Param('id') id: mongoId,
    @Body() bill: UpdateBillDto,
  ): BillType {
    return await this.billsService.updateBill(id, bill);
  }

  @Delete(':id')
  async deleteBill(@Param('id') id: mongoId): BillType {
    return await this.billsService.deleteBill(id);
  }
}
