import { Component } from '@angular/core';

@Component({
  selector: 'app-songs',
  template: `
    <h2>Songs Page</h2>
    <!-- You can add song-related content here -->

    <!-- Embed the comments component -->
    <app-comments></app-comments>
  `,
  styles: ['h2 { color: #2c3e50; }']
})
export class SongsComponent { }
