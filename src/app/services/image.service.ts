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


  addImage(image:Image):Observable<Image[]>{
  	return this.http.post('http://localhost:8000/V1/images', image)
  			   .map((response:Response)=> response.json())
  			   .catch((error:any)=>Observable.throw(error.json().error || {message:"Error del servidor"}));
  }

  getImage(id:string):Observable<Image[]>{
  	return this.http.get('http://localhost:8000/V1/images/'+id)
  			   .map((response:Response)=>response.json());
  }

  updateImage(image: Object): Observable<Image[]>{
  	const apiUrl = 'http://localhost:8000/V1/images';
  	const url = `${apiUrl}/${image["id"]}`;
  	return this.http.put(url, image)
  			   .map((response:Response)=> response.json())
  			   .catch((error:any)=> Observable.throw(error.json().error || {message: "Error de servidor"}));
  }

}
