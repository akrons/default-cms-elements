import { Component, OnInit } from '@angular/core';
import { IElementComponent } from '@akrons/cms';

@Component({
  selector: 'akrons-default-cms-elements-image-element',
  templateUrl: './image-element.component.html',
  styleUrls: ['./image-element.component.css']
})
export class ImageElementComponent implements OnInit, IElementComponent<IImageElementData> {
  data: IImageElementData;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface IImageElementData {
  description: string;
  url: string;
}