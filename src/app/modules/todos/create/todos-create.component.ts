import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TodosService } from '../todos.service';
import { SnackBarService } from '../../../shared/services/snack-bar/snack-bar.service';
import { FormService } from '../../../shared/services/form/form.service';
import { Form } from '../../../shared/models/form';
import { Todo } from '../../../shared/models/todo';

@Component({
    selector: 'app-todos-create',
    templateUrl: '../form/todos-form.component.html',
    styleUrls: ['../form/todos-form.component.scss']
})
export class TodosCreateComponent implements Form{
    todo: Todo = { title: '', completed: false };
    loadingInfo = false;
    formService = FormService;

    constructor(
        private service: TodosService,
        private router: Router,
        private snackBar: SnackBarService
    ){}

    onSubmit(): void{
        this.service
            .create(this.todo)
            .subscribe(todo => {
            this.snackBar.open(`Criado TODO de id: ${todo.id}`);
            this.router.navigateByUrl('/todos');
        });
    }
}
