import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input} from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);
  results = computed(()=> this.investmentService.resultData());
}
