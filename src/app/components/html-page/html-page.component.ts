import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-page',
  templateUrl: './html-page.component.html',
  styleUrls: ['./html-page.component.scss']
})
export class HtmlPageComponent implements OnInit {

  sidenavObj:[] | any;
  constructor() { }

  ngOnInit(): void {
    this.sidenavObj=[
      { name: "Key feature" },
      { name: "How it works" },
      { name: "About us" },
      { name: "FAQ" },
      { name: "Book a demo" },
      { name: "Contact" },
      { name: "Privacy policy" },
      { name: "Terms of service" },

    ]
  }

}
