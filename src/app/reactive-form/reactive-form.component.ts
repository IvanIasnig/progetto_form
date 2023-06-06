import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  homeform!: FormGroup

  constructor() { }


  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      alter: new FormControl(null, Validators.required),
      nemico: new FormControl(null, Validators.maxLength(10)),
      pianeta: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      debolezza: new FormControl(null, Validators.required),

    })
  }

  onSubmit(){
    console.log(this.homeform)
  }
}
