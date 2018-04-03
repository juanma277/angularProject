import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';
import { Observable } from 'rxjs/Observable';
import { ImageService } from '../../services/image.service'

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {

	images: Observable<Image[]>;
	selectedImage:Image;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  	this.images = this.imageService.getImages();
  }

  onSelect(image:Image){

  	this.selectedImage = image;

  }

}
