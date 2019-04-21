import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SocialPostsComponent } from './socialPosts/socialPosts.component';
import { PostComponent } from './socialPosts/post/post.component';
import { PostFormComponent } from './socialPosts/postForm/postForm.component';


@NgModule({
  declarations: [
    AppComponent, SocialPostsComponent, PostComponent, PostFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
