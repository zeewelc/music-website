
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Release { id:number; title:string; cover_url?:string; release_date?:string; spotify_url?:string; apple_url?:string; youtube_url?:string; bandcamp_url?:string; featured?:number; }
export interface Show { id:number; date:string; city?:string; country?:string; venue?:string; festival?:string; ticket_url?:string; notify_url?:string; status?:string; }
export interface Merch { id:number; name:string; price_cents:number; image_url?:string; product_url?:string; }

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  private base = 'http://localhost:3000/api';

  getReleases(): Observable<Release[]> { return this.http.get<Release[]>(`${this.base}/releases`); }
  getFeaturedRelease(): Observable<Release[]> { return this.http.get<Release[]>(`${this.base}/releases/featured`); }
  getUpcomingShows(): Observable<Show[]> { return this.http.get<Show[]>(`${this.base}/shows/upcoming`); }
  getMerch(): Observable<Merch[]> { return this.http.get<Merch[]>(`${this.base}/merch`); }
}
