import { StudyService } from '@api/study/services';
import { Module } from '@nestjs/common';
import { HomeworkController } from './homework.Controller';
import { StudyController } from './study.controller';

@Module({
  controllers: [HomeworkController],
  providers: [StudyService],
})
export class Study1Module {}