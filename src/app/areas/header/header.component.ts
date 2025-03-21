import { Component, ElementRef, ViewChild } from '@angular/core';
import { URL_ROUTE } from '../../app-routing.module';
import { CustomRoutingService } from '../../services/custom-routing.service';
import { DeviceInfoService } from '../../services/device-info.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMobile: boolean = false;
  showMenu: boolean = false;

  @ViewChild('toggleBtn')
  toggleBtn!: ElementRef;

  constructor(private router: CustomRoutingService) {
    //Using the event listener for responsive presentation resonse
    //Not needed in production
    window.addEventListener('resize', () => {
      this.isMobile = DeviceInfoService.isMobile();
    });
    this.isMobile = DeviceInfoService.isMobile();
  }

  navigate(url: URL_ROUTE) {
    this.showMenu = false;
    this.router.goTo(url);
  }

  toggleMenu() {
    const el = <HTMLElement>this.toggleBtn.nativeElement;
    if (el.classList.contains('blink')) el.classList.remove('blink');
    el.classList.add('blink');
    this.showMenu = !this.showMenu;
  }
}
