import { Module } from '@nestjs/common';
import { ListModule } from '../List/module';
import { AdminModule } from '../Admin/module';

@Module({
  imports: [ListModule, AdminModule],
})
export class ApplicationModule {}