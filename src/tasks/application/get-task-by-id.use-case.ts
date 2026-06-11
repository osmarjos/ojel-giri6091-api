import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import * as taskRepositoryInterface from "../domain/task.repository.interface";
import { TaskRepositoryImpl } from "../infraestructure/persistence/task.respository.impl";
import { Task } from "../domain/task.entity";

@Injectable()
export class GetTaskByIdUseCase {

    constructor(
        @Inject(taskRepositoryInterface.ITaskRepositoryToken)
        private readonly taskRepository: taskRepositoryInterface.ITaskRepository
        ){}

    async execute(id: string): Promise<Task> {
        const task = await this.taskRepository.findById(id);
        if (!task)
            throw new NotFoundException(`La tarea ${id} no exste`);
        return task;
    
    }
}

    