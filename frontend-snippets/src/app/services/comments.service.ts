import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private apiUrl = 'http://localhost:3000/api/comments'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  getAllComments(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getCommentsByFilter(filter: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?filter=${filter}`);
  }

  updateComment(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addComment(comment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, comment);
  }
}
