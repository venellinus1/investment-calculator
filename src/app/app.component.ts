import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";

import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  //imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
 
    
}
