import { CreateTaskUseCase } from "@/tasks/application/create-task.use-case";
import { Task } from "@/tasks/domain/task.entity";
import type { ITaskRepository } from "@/tasks/domain/task.repository.interface";
import { ITaskRepositoryToken } from "@/tasks/domain/task.repository.interface";
import { Controller, Get, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class TaskRepositoryImpl implements ITaskRepository {

    private tasks: Task[] = [];
    
    async create(task: Task): Promise<Task> {
        return task;
    }
    async findAll(): Promise<Task[]> {
        return this.tasks;
    }
    async findById(id: string): Promise<Task | null> {
        return this.tasks.find( t => t.id == id) || null;
    }

    update(task: Task): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

@Controller()
export class TaskController{

    constructor(
        private readonly createTaskUseCase: CreateTaskUseCase,
        @Inject(ITaskRepositoryToken)
        private readonly taskrepository: ITaskRepository
    ) {}

    @Get()
    async findAll(){
        return this.taskrepository.findAll();
    }

}

//! npm i --save class-validator class-trasformer

// git add .
// git commit -m "add: Configuracion de los casos de uso para tareas"
// git push