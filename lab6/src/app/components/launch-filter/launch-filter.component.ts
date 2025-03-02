import { Component,EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-launch-filter',
  standalone: true,
  imports: [CommonModule],
  template: '<button (click)="filter()">Показать запуски</button>',
  styleUrl: './launch-filter.component.css'
})
export class LaunchFilterComponent {
	@Output() filterEvent=new EventEmitter<void>();
 	filter(){
 	this.filterEvent.emit();
 	}
}
