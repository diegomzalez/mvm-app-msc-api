import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MongoIdPipe } from '../../../common/mongo-id.pipe';
import Endpoint from '../../../endpoint/endpoint';
import { mongoId } from '../../../types/mongo-id.type';
import { CreateRateDto, FilterRateDto, UpdateRateDto } from '../dto/rate.dto';
import { RateService } from '../service/rate.service';
import { RateType } from '../types/rate.type';
import { RateArrayType } from '../types/rate-array.type';

@ApiTags('rates')
@Controller(Endpoint.ratesEndpoint)
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Get()
  async etRates(@Body() params?: FilterRateDto): RateArrayType {
    return await this.rateService.getRates(params);
  }

  @Post()
  async postRate(@Body() rateData: CreateRateDto): RateType {
    return await this.rateService.postRate(rateData);
  }

  @Get(':rateId')
  async getRate(
    @Param('rateId', MongoIdPipe) rateId: mongoId,
    @Body() updatedRate: UpdateRateDto,
  ): RateType {
    return await this.rateService.updateRate(rateId, updatedRate);
  }

  @Put(':rateId')
  async updateRate(
    @Param('rateId', MongoIdPipe) rateId: mongoId,
    @Body() updatedRate: UpdateRateDto,
  ): RateType {
    return await this.rateService.updateRate(rateId, updatedRate);
  }

  @Delete(':rateId')
  async deleteRate(@Param('rateId', MongoIdPipe) rateId: mongoId): RateType {
    return await this.rateService.deleteRate(rateId);
  }

  @Delete(':rateId/currency')
  async deleteCurrency(
    @Param('rateId', MongoIdPipe) rateId: mongoId,
  ): RateType {
    return await this.rateService.deleteCurrency(rateId);
  }
}
