import {Component, Input} from '@angular/core';

@Component({
  selector: 'option',
  templateUrl: 'option.html'
})
export class OptionComponent {

  @Input('src') src;

  constructor() {
  }

}
