import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'music-website';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  changeTrack(event: Event) {
    const selector = event.target as HTMLSelectElement;
    const player = document.getElementById('audioPlayer') as HTMLAudioElement;
    const cover = document.getElementById('trackCover') as HTMLImageElement;
    const title = document.getElementById('trackTitle')!;
    const artist = document.getElementById('trackArtist')!;

    const tracks: Record<string, { src: string; title: string; artist: string; cover: string }> = {
      track1: {
        src: 'assets/060405.mp3',
        title: '060405',
        artist: 'Jack Denied',
        cover: 'assets/images/track1-cover.jpg',
      },
      track2: {
        src: 'assets/as then 3.mp3',
        title: 'as then 3',
        artist: 'Jack Denied',
        cover: 'assets/images/track2-cover.jpg',
      },
      track3: {
        src: 'assets/7-4-3.mp3',
        title: '7-4-3',
        artist: 'Jack Denied',
        cover: 'assets/images/track3-cover.jpg',
      },
      track4: {
        src: 'assets/12-4-4-pt1.mp3',
        title: '12-4-4-pt1',
        artist: 'Jack Denied',
        cover: 'assets/images/track4-cover.jpg',
      },
    };

    const selected = tracks[selector.value];
    player.src = selected.src;
    title.textContent = selected.title;
    artist.textContent = selected.artist;
    cover.src = selected.cover;
    player.play();
  }
}
