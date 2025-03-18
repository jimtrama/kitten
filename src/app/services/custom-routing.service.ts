import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
type Page = 'vehicles' | 'wash' | 'shop' | 'music' | 'account' | 'login';
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

  goTo(page:Page){

    if(page === "vehicles"){
      this.vehicles();
    }else if(page === "wash"){
      this.wash();
    }else if(page === "shop"){
      this.shop();
    }else if(page === "music"){
      this.music();
    }else if(page === "account"){
      this.account();
    }else if(page === "login"){
      this.login();
    }
  }

  private vehicles(){
    this.router.navigate(["home","v"]);
  }
  private wash(){
    this.router.navigate(["home","w"]);
  }
  private shop(){
    this.router.navigate(["home","s"]);
  }
  private account(){
    this.router.navigate(["home","a"]);
  }
  private music(){
    this.router.navigate(["home","m"]);
  }
  private login(){
    this.router.navigate(["login"])
  }
}
