import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClipartService } from '../shared/clipart.service';

@Component({
  selector: 'app-display-clipart',
  templateUrl: './display-clipart.component.html',
  styleUrls: ['./display-clipart.component.css']
})
export class DisplayClipartComponent implements OnInit {

  //string passed down
  @Input() imageStr : string;
  //url passed bk into add-product
  @Output() addImageStringEE: EventEmitter<any> = new EventEmitter();

  clipArtData: IOpenClipArt;

  constructor(private _clipArt: ClipartService) { }

  ngOnInit() {
    this._clipArt.getImageList(this.imageStr).subscribe(data => {
      this.clipArtData = data
    });
  }


  //event to pass url of image bk to add-product
  selectImage(imageStr): boolean {
    this.addImageStringEE.emit(imageStr);
    return false;
  }
}
