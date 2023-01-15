import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent {
  @Input() linkToImage: any;
  @Input() linkToImageName: any;
  @Output() close = new EventEmitter<void>();


  onClose() {
    //TO-DO => continue slide show
    this.close.emit();
  }
}


