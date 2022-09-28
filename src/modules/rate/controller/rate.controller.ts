import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { MongoIdPipe } from '../../../common/mongo-id.pipe';
import Endpoint from '../../../endpoint/Endpoint';
import { mongoId } from '../../../types/mongoId.type';
import { CreateRateDto, FilterRateDto, UpdateRateDto } from '../dto/Rate.dto';
import { RateService } from '../service/rate.service';
import RateType from '../types/Rate.type';
import RateArrayType from '../types/RateArray.type';

@Controller(Endpoint.ratesEndpoint)
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Get()
  async etRates(@Body() params?: FilterRateDto): RateArrayType {
    return await this.rateService.getRates(params);
  }

  @Post()
  async postRate(@Body() rate: CreateRateDto): RateType {
    return await this.rateService.postRate(rate);
  }

  @Get(':id')
  async getRate(
    @Param('id', MongoIdPipe) id: mongoId,
    @Body() updatedRate: UpdateRateDto,
  ): RateType {
    return await this.rateService.updateRate(id, updatedRate);
  }

  @Put(':id')
  async updateRate(
    @Param('id', MongoIdPipe) id: mongoId,
    @Body() updatedRate: UpdateRateDto,
  ): RateType {
    return await this.rateService.updateRate(id, updatedRate);
  }

  @Delete(':id')
  async deleteRate(@Param('id', MongoIdPipe) id: mongoId): RateType {
    return await this.rateService.deleteRate(id);
  }
}
