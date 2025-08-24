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
        src: 'assets/sample.mp3',
        title: 'Track 1',
        artist: 'Demo Artist',
        cover: 'https://r3hab.com/assets/images/track-cover.jpg',
      },
      track2: {
        src: 'assets/sample2.mp3',
        title: 'Track 2',
        artist: 'Demo Artist',
        cover: 'https://r3hab.com/assets/images/track-cover.jpg',
      },
      track3: {
        src: 'assets/sample.mp3',
        title: 'Track 3',
        artist: 'Demo Artist',
        cover: 'https://r3hab.com/assets/images/track-cover.jpg',
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
