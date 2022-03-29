import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { TeacherLoginComponent } from './components/Incharge/teacher-login/teacher-login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { InchargeComponent } from './components/Incharge/incharge/incharge.component';
import { PaperpatternComponent } from './components/Incharge/incharge/paperpattern/paperpattern.component';
import { AddquestionsComponent } from './components/Incharge/incharge/addquestions/addquestions.component';
import { StudentperformanceComponent } from './components/Incharge/incharge/studentperformance/studentperformance.component';
import { StudentComponent } from './components/student/student.component';
import { QuizComponent } from './components/student/quiz/quiz.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/home/footer/footer.component';
import { BodyComponent } from './components/home/body/body.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameComponent } from './components/game/game.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BoardComponent } from './components/game/board/board.component';
import { CellComponent } from './components/game/cell/cell.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherLoginComponent,
    InchargeComponent,
    PaperpatternComponent,
    AddquestionsComponent,
    StudentperformanceComponent,
    StudentComponent,
    QuizComponent,
    NavBarComponent,
    FooterComponent,
    BodyComponent,
    GameComponent,
    BoardComponent,
    CellComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    ModalModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
