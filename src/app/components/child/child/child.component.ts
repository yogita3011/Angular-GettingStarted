import { Component, Input, Output, OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() addMsg = new EventEmitter<any>();
  @Input() msg: string | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

  onButtonclick() {
    this.addMsg.emit('Hello');
  }
}
