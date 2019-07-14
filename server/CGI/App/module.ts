import { Module } from '@nestjs/common';
import { ListModule } from '../List/module';

@Module({
  imports: [ListModule],
})
export class ApplicationModule {}