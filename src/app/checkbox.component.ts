import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [ './checkbox.component.scss' ]
})
export class CheckboxComponent  {
  @Input() title: string = 'Title';
  @Input() value: boolean = false;
  @Output() change: EventEmitter<any> = new EventEmitter();
}
