import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from '../../shared/models/menu-item';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
    readonly MENU: MenuItem[] = [
        {
            name: "Postagens",
            path: "postagens"
        },
        {
            name: "Álbuns",
            path: "albuns"
        },
        {
            name: "TODO's",
            path: "todos"
        }
    ];

    constructor(private router: Router){}

    isSelected(path: string): boolean{
        return this.router.url.includes(path);
    }
}
