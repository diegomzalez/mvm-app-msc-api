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

import { CreateBillDto, FilterBillDto, UpdateBillDto } from '../dto/Bill.dto';
import Bill from '../entity/Bill.entity';
import { BillsService } from '../service/bills.service';

@Controller(Endpoint.billsEndpoint)
export class BillsController {
  constructor(private billsService: BillsService) {}

  @Get()
  async getBills(@Query() params?: FilterBillDto): Promise<Bill[]> {
    return await this.billsService.getBills(params);
  }

  @Post()
  async postBill(@Body() bill: CreateBillDto): Promise<Bill> {
    return await this.billsService.postBill(bill);
  }

  @Get(':id')
  async getBill(@Param('id') id: Types.ObjectId): Promise<Bill> {
    return await this.billsService.getBill(id);
  }

  @Put(':id')
  async updateBill(
    @Param('id') id: Types.ObjectId,
    @Body() bill: UpdateBillDto,
  ): Promise<Bill> {
    return await this.billsService.updateBill(id, bill);
  }

  @Delete(':id')
  async deleteBill(@Param('id') id: Types.ObjectId): Promise<Bill> {
    return await this.billsService.deleteBill(id);
  }
}
