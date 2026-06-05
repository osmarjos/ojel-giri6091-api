import { CreateTaskUseCase } from "@/tasks/application/create-task.use-case";
import { ITaskRepositoryToken } from "@/tasks/domain/task.repository.interface";
import type { ITaskRepository } from "@/tasks/domain/task.repository.interface";
import { Controller, Get, Inject } from "@nestjs/common";

@Controller("tasks")
export class TaskController {

    constructor(
        private readonly createTaskUseCase: CreateTaskUseCase,
        @Inject(ITaskRepositoryToken) private readonly taskRepository: ITaskRepository
    ){}

    @Get()
    async findAll() {
        return this.taskRepository.findAll();
    }
}