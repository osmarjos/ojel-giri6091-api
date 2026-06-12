import { Module } from '@nestjs/common';

import { TasksModule } from './tasks/infraestructure/tasks.module';

@Module({
  imports: [
    TasksModule
  ],

})
export class AppModule {}
