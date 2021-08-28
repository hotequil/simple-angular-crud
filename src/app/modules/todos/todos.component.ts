import { Component, OnInit } from '@angular/core';

import { TodosService } from './todos.service';
import { SnackBarService } from '../../shared/services/snack-bar/snack-bar.service';
import { Todo } from '../../shared/models/todo';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    todos: Todo[] = [];
    todosColumns = ['title', 'completed', 'actions'];

    constructor(private service: TodosService, private snackBar: SnackBarService){}

    ngOnInit(): void {
        this.service.get().subscribe(todos => this.todos = todos);
    }

    delete(todo: Todo): void{
        const { id } = todo;

        this.service
            .delete(id as number)
            .subscribe(() => {
            this.snackBar.open(`Deletado TODO de id: ${id}`);
            this.todos = this.todos.filter(currentTodo => currentTodo.id !== id);
        });
    }
}
