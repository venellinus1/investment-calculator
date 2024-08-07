import { Component, Input, input} from '@angular/core';
import { InvestmentInput } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../user-input/investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService){}

  get results(){
    return this.investmentService.resultsData;
  }
}
