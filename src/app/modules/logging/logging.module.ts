import { CommonModule } from "@angular/common";
import { NgModule, OnDestroy } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { LoggingRoutingModule } from "./logging-routing.module";
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        TranslateModule,
        LoggingRoutingModule
    ]
})
export class LoggingModule {

}