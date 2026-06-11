import { Module } from "@nestjs/common";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";
import { TaskRepositoryImpl } from "./persistence/task.respository.impl";
import { CreateTaskUseCase } from "../application/create-task.use-case";
import { TaskController } from './controllers/tasks.controllers';
@Module({
    controllers: [ TaskController ],
    providers:[
        CreateTaskUseCase,
        {
            provide: ITaskRepositoryToken,
            useClass: TaskRepositoryImpl
        }
    ],
    exports:  [ CreateTaskUseCase]
}

)
export class TaskModule { }