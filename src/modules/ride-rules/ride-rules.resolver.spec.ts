import { Test, TestingModule } from '@nestjs/testing';
import { RideRulesResolver } from './ride-rules.resolver';
import { RideRulesService } from './ride-rules.service';

describe('RideRulesResolver', () => {
  let resolver: RideRulesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RideRulesResolver, RideRulesService],
    }).compile();

    resolver = module.get<RideRulesResolver>(RideRulesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
