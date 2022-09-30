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

import Endpoint from '../../../endpoint/endpoint';
import { CreateBillDto, FilterBillDto, UpdateBillDto } from '../dto/bill.dto';
import { BillsService } from '../service/bills.service';
import { BillType } from '../types/bill.type';
import { mongoId } from '../../../types/mongo-id.type';
import { ApiTags } from '@nestjs/swagger';
import { BillTypeArray } from '../types/bill-array.type';

@ApiTags('bills')
@Controller(Endpoint.billsEndpoint)
export class BillsController {
  constructor(private billsService: BillsService) {}

  @Get()
  async getBills(@Query() params?: FilterBillDto): BillTypeArray {
    return await this.billsService.getBills(params);
  }

  @Post()
  async postBill(@Body() billData: CreateBillDto): BillType {
    return await this.billsService.postBill(billData);
  }

  @Get(':billId')
  async getBill(@Param('billId') billId: mongoId): BillType {
    return await this.billsService.getBill(billId);
  }

  @Put(':billId')
  async updateBill(
    @Param('billId') billId: mongoId,
    @Body() billData: UpdateBillDto,
  ): BillType {
    return await this.billsService.updateBill(billId, billData);
  }

  @Delete(':billId')
  async deleteBill(@Param('billId') billId: mongoId): BillType {
    return await this.billsService.deleteBill(billId);
  }
}
