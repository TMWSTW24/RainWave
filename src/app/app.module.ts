import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // This is the missing import that causes the ngModel issue
import { AppComponent } from './app.component';
import { RainSimulationComponent } from './rain-simulation/rain-simulation.component'; // Adjust the path as necessary

@NgModule({
  declarations: [
    AppComponent,
    RainSimulationComponent // This should be your rain simulation component
  ],
  imports: [
    BrowserModule,
    FormsModule // FormsModule needs to be in imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
