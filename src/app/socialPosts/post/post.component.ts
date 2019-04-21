import { Component, Input, Output, EventEmitter } from '@angular/core';
import { post } from 'selenium-webdriver/http';

interface Post {
    title: string;
    body: string;
}

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
    @Input() post: Post;
    @Output() delete = new EventEmitter<any>();
    
removePost = () => {
this.delete.emit(this.post);
}

}
