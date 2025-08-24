import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { ApiService, Release } from '../../core/services/api.service';
import { ReleaseCardComponent } from './release-card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-release-grid',
  standalone: true,
  imports: [NgFor, AsyncPipe, ReleaseCardComponent],
  templateUrl: './release-grid.component.html',
  styleUrls: ['./release-grid.component.scss']
})
export class ReleaseGridComponent implements OnInit {
  private api = inject(ApiService);
  releases$!: Observable<Release[]>;
  ngOnInit() { this.releases$ = this.api.getReleases(); }
}
