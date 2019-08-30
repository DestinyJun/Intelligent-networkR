import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbi-insp-recording',
  templateUrl: './insp-recording.component.html',
  styleUrls: ['./insp-recording.component.less']
})
export class InspRecordingComponent implements OnInit {
  val1: string;
  item: string;
  items =  [
    {label: '1号管线', value: '1号管线'},
    {label: '2号管线', value: '2号管线'},
    {label: '3号管线', value: '3号管线'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
