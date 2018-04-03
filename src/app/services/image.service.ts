import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ImageService {

  constructor(private http:Http) { }

  getImages():Observable<Image[]>{
  	return this.http.get('http://localhost:8000/V1/images').map((response:Response)=> response.json());
  }

}
