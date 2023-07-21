---
title : API with NestJS
tags:
  - NestJS
emoji: 🟩
---
## CRUD API
CRUD stands for Create, Read, Update, and Delete. 

## Description
In nestjs we have two files that name is controller and service. In controller we implement function that get income request and authenticate and validate the request after that pass data to the service function where the logic of system existed in there.

## Interface
In nestjs interface is structuer like schema or something else, this structuer is common for type and type hinting. But interface is similar to class and we can use class insted of interface.

## DTO (Data Transfer Object)
This is object that hold the schema of data that income. In nestjs we implement DTO with class. We can use DTO for validate income data.

## Read API
Controller file:
```Typescript
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.taskService.getTasksWithFilters(filterDto);
    } else {
      return this.taskService.getTasks();
    }
  }
}
```
Service file:
```Typescript
getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getTasks();
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    if (search) {
      tasks = tasks.filter(
        (task) =>
          task.title.includes(search) || task.description.includes(search),
      );
    }
    return tasks;
  }
  getTasks(): Task[] {
    return this.tasks;
  }
```
DTO file:
```Typescript
import { TaskStatus } from '../tasks.model';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}
```