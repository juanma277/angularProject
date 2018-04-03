import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Image } from '../../models/image';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'ng-admin-images-list',
  templateUrl: './admin-images-list.component.html',
  styleUrls: ['./admin-images-list.component.css']
})
export class AdminImagesListComponent implements OnInit {
	images:Observable<Image[]>;

  constructor(private imagenService:ImageService) { }

  ngOnInit() {

  	this.images = this.imagenService.getImages();
  }

}
