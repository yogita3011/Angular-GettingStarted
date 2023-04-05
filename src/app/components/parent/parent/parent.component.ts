import { Component, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../../child/child/child.component';
interface temp {
  num?: string
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})


export class ParentComponent implements OnInit {
  msg: string | undefined;
  constructor() {
  }
  ngOnInit(): void {
    this.msg = 'messege from parent';
  }

  addMsg(event: any) {
    console.log("output parameter value : " + event);
  }
}
