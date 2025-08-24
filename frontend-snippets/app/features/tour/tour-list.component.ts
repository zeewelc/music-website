import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { ApiService, Show } from '../../core/services/api.service';
import { Observable } from 'rxjs';
import { TourCardComponent } from './tour-card.component';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [NgFor, AsyncPipe, TourCardComponent],
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {
  private api = inject(ApiService);
  shows$!: Observable<Show[]>;
  ngOnInit() { this.shows$ = this.api.getUpcomingShows(); }
}
