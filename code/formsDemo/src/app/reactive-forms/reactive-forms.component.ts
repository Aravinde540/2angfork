import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  myForm = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
    email: new FormControl('', [ Validators.email ]),
    password:new FormControl('',[Validators.minLength(6),Validators.pattern('^[a-zA-Z]{6}$')])
})
}
