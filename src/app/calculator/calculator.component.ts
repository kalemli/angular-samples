import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public value = '0';

  constructor() { }

  ngOnInit() {
  }

  public press(num: string) {
    switch (num) {
      case '+/-': {
        if (this.value.startsWith('-'))
          this.value = this.value.substr(1);
        else
          this.value = '-' + this.value;
        break;
      }
      case '.': {
        if (this.value.indexOf('.') == -1)
          this.value += '.';
        break;
      }
      default: {
        if (this.value == '0')
          this.value = num;
        else
          this.value = this.value + num;
      }
    }
  }
}
