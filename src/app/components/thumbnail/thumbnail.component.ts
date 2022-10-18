import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Artwork } from 'src/app/artwork';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() thumbnail: any;
  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {

  }
  onClose() {
    this.close.emit();
  }
}


