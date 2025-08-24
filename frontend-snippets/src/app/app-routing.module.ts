
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './songs.component';
import { CommentsComponent } from './comments.component';
import { GalleryComponent } from './gallery.component';
import { ContactComponent } from './contact.component';
import { RatingComponent } from './rating.component';

const routes: Routes = [
  { path: 'songs', component: SongsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'comments', component: CommentsComponent },
  { path: '', redirectTo: '/songs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
