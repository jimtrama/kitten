import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { URL_ROUTE } from '../app-routing.module';
@Injectable({
  providedIn: 'root'
})
export class CustomRoutingService {

  constructor(private router:Router) { }

  get route():string{
    const url = this.router.url;

    if(url){
      return url;
    }
    return  "" ;

  }

  goTo(page:URL_ROUTE){

    if(page === "adopt"){
      this.adopt();
    }else if(page === "stories"){
      this.stories();
    }else if(page === "about"){
      this.about();
    }else if(page === "blog"){
      this.blog();
    }else if(page === "contact"){
      this.contact();
    }
  }

  private adopt(){
    this.router.navigate(["adopt"]);
  }
  private stories(){
    this.router.navigate(["stories"]);
  }
  private about(){
    this.router.navigate(["about"]);
  }
  private blog(){
    this.router.navigate(["blog"]);
  }
  private contact(){
    this.router.navigate(["contact"]);
  }
}
