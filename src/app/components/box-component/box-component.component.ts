import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-box-component',
  templateUrl: './box-component.component.html',
  styleUrls: ['./box-component.component.scss']
})
export class BoxComponentComponent implements OnInit {

  @Input() value: 'X' | 'O' | any;

  constructor() { }

  ngOnInit(): void {
  }

}
