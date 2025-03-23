import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'POS Dashboard';
  salesData = [
    { category: 'Electronics', amount: 1200 },
    { category: 'Clothing', amount: 800 },
    { category: 'Groceries', amount: 600 }
  ];
}
