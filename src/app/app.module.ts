import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './core/footer/footer.module';
import { HeaderModule } from './core/header/header.module';
import { MenuModule } from './core/menu/menu.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FooterModule,
        HeaderModule,
        MenuModule,
        MatSidenavModule,
        HttpClientModule
    ],
    providers: [MatSnackBar],
    bootstrap: [AppComponent]
})
export class AppModule {
}
