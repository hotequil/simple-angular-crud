import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { finalize, switchMap, take } from 'rxjs/operators';

import { TodosService } from '../todos.service';
import { SnackBarService } from '../../../shared/services/snack-bar/snack-bar.service';
import { FormService } from '../../../shared/services/form/form.service';
import { Form } from '../../../shared/models/form';
import { Todo } from '../../../shared/models/todo';

@Component({
    selector: 'app-todos-update',
    templateUrl: '../form/todos-form.component.html',
    styleUrls: ['../form/todos-form.component.scss']
})
export class TodosUpdateComponent implements OnInit, Form{
    todo: Todo = { title: '', completed: false };
    loadingInfo = true;
    formService = FormService;

    constructor(
        private service: TodosService,
        private router: Router,
        private route: ActivatedRoute,
        private snackBar: SnackBarService
    ){}

    ngOnInit(): void{
        this.get();
    }

    onSubmit(): void{
        this.service
            .update(this.todo)
            .subscribe(todo => {
            this.snackBar.open(`Atualizado TODO de id: ${todo.id}`);
            this.router.navigateByUrl('/todos');
        });
    }

    private get(): void{
        this.route
            .params
            .pipe(
                take(1),
                switchMap(params => this.service.single(Number(params.id))),
                finalize(() => this.loadingInfo = false)
            )
            .subscribe(todo => this.todo = todo);
    }
}
