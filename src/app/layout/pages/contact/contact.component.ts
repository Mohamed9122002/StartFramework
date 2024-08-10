import { Component } from '@angular/core';
import { MainTitleComponent } from "../main-title/main-title.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [MainTitleComponent,ReactiveFormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css"
})
export class ContactComponent {
  contactFrom:FormGroup= new FormGroup({
    userName:new FormControl(null),
    userAge:new FormControl(null),
    userEmail:new FormControl(null),
    userPassword:new FormControl(null),

  })
  test(){
    console.log(this.contactFrom);

  }
}
