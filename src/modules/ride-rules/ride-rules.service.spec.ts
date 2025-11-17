import { Test, TestingModule } from '@nestjs/testing';
import { RideRulesService } from './ride-rules.service';

describe('RideRulesService', () => {
  let service: RideRulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RideRulesService],
    }).compile();

    service = module.get<RideRulesService>(RideRulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
