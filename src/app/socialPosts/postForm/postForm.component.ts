import { Component, Output, EventEmitter } from '@angular/core';

interface NewItem {
  title: string;
  body: string;
}

@Component({
  selector: 'post-form',
  templateUrl: './postForm.component.html',
  styleUrls: ['./postForm.component.css']
})
export class PostFormComponent {
  titleInput: string;
  bodyInput: string;
  modalDisplay: boolean = true;  
  @Output() submitted = new EventEmitter<NewItem>();

  addPost = () => {
    const newItem = {
      title: this.titleInput,
      body: this.bodyInput,
    };
    
    this.submitted.emit(newItem);
    this.titleInput = null;
    this.bodyInput = null;
  }

  closeDiv = () => {
    this.modalDisplay = !this.modalDisplay;
  }

}
