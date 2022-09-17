import { Test, TestingModule } from '@nestjs/testing';
import { MonthsController } from './months.controller';

describe('MonthsController', () => {
  let controller: MonthsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonthsController],
    }).compile();

    controller = module.get<MonthsController>(MonthsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
