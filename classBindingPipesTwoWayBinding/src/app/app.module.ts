import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { TemplateRefrenceVraiableComponent } from './template-refrence-vraiable/template-refrence-vraiable.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularPipesComponent,
    TemplateRefrenceVraiableComponent,
    NgModelComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
