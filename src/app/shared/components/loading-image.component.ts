import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-loader',
  template: `<i *ngIf="!loaded" class="fa fa-spinner fa-spin fa-fw fa-3x"></i>
    <img [hidden]="!loaded" (load)="loaded = true" [src]="src"/>`
})
export class ImageLoader {
  @Input()
  public src;

  public loaded: boolean;
}
