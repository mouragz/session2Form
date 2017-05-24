import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: '../../templates/contact-form.html',
  styleUrls: ['../../styles/contact-form.css']
})
export class ContactFormComponent {
  log(firstName:any){
     console.log(firstName);
  }
  onSubmit(form:any) :void{
    console.log(form);
  }
}
