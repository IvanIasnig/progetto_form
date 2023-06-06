import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('homeForm') homeform!: NgForm

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(this.homeform)
  }
}
