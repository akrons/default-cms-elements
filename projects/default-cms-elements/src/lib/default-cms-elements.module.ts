import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalLineElementComponent } from './horizontal-line-element/horizontal-line-element.component';
import { ImageElementComponent } from './image-element/image-element.component';
import { TextElementComponent } from './text-element/text-element.component';
import { TitleElementComponent } from './title-element/title-element.component';
import { MarkdownModule } from 'ngx-markdown';
import { ElementManagerService } from '@akrons/cms';

const elementComponents = [
  HorizontalLineElementComponent,
  ImageElementComponent,
  TextElementComponent,
  TitleElementComponent,
]


@NgModule({
  declarations: [
    ...elementComponents,
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
  ],
  entryComponents: [
    ...elementComponents,
  ]
})
export class DefaultCmsElementsModule {
  constructor(
    elementManagerService: ElementManagerService,
  ) {
    elementManagerService.setElements([
      { selector: 'text', componentFactory: TextElementComponent },
      { selector: 'title', componentFactory: TitleElementComponent },
      { selector: 'horizontal-line', componentFactory: HorizontalLineElementComponent },
      { selector: 'image', componentFactory: ImageElementComponent },
    ]);
  }
}
