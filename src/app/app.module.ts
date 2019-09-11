import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowBasicsComponent } from './show-basics/show-basics.component';
import { ShowService } from './show/show.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { ShowSearchComponent } from './show-search/show-search.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ShowBasicsComponent,
    ShowSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    


  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
