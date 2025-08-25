import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];

  // Model for new comment form
  newComment = {
    name: '',
    text: ''
  };

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.loadComments();
  }

 loadComments(): void {
  this.commentsService.getAllComments().subscribe(data => {
    this.comments = data.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  });
}

  deleteComment(id: number): void {
    this.commentsService.deleteComment(id).subscribe(() => {
      this.comments = this.comments.filter(comment => comment.id !== id);
    });
  }

addNewComment(): void {
  if (this.newComment.name && this.newComment.text) {
    const commentPayload = {
      ...this.newComment,
      page: 'songs' // Add the page identifier
    };

    this.commentsService.addComment(commentPayload).subscribe(() => {
      this.loadComments(); // Refresh the list
      this.newComment = { name: '', text: '' }; // Reset form
    });
  }
}

}
