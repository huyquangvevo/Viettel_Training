import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  flag_contact = true;
  flag_arrow = true;

  constructor() { }

  ngOnInit() {
  }

  toggleContact(){
    this.flag_contact = !this.flag_contact;
  }

  toggleArrow(){
    this.flag_arrow = !this.flag_arrow;
    alert("Huy");
  }

}
