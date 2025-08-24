import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tour-card',
  standalone: true,
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent {
  @Input() date = '';
  @Input() city = '';
  @Input() festival?: string;
  @Input() venue?: string;
  @Input() ticketUrl?: string;
  @Input() notifyUrl?: string;
}
