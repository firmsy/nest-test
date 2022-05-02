import { Controller, Get } from "@nestjs/common";

@Controller('test')
export class TestController {
  

  @Get()
  showTest2(): string {
    return 'test 2'
  }

  @Get()
  showTest(): string {
    return 'test 1'
  }
}