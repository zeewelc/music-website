import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-release-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './release-card.component.html',
  styleUrls: ['./release-card.component.scss']
})
export class ReleaseCardComponent {
  @Input() title = '';
  @Input() cover = '';
  @Input() spotify?: string;
  @Input() youtube?: string;
}
