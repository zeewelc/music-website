import { AppRoutingModule } from './app-routing.module';
import { SongsComponent } from './songs.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GalleryComponent } from './gallery.component';
import { ContactComponent } from './contact.component';
import { RatingComponent } from './rating.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    CommentsComponent,
    GalleryComponent,
    ContactComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
