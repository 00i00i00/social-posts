import { Component } from '@angular/core';
// import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'social-posts',
  templateUrl: './socialPosts.component.html',
  styleUrls: ['./socialPosts.component.css']
})
export class SocialPostsComponent {
  posts = [{title: 'Dog', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, {title: 'Cat', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, {title: 'Pig', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, {title: 'Cow', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, {title: 'Whale', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}];
  formDisplay: boolean = false;


   showForm = () => {
    this.formDisplay = !this.formDisplay;
}

    onSubmit = (event) => {
        this.posts.unshift(event);
        this.formDisplay = !this.formDisplay;
    }

    onDelete = (event) => {
        const index = this.posts.indexOf(event);
        this.posts.splice(index, 1);
    }
}
