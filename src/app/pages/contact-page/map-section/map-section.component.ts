import { Component } from '@angular/core';

@Component({
  selector: 'app-map-section',
  standalone: false,
  templateUrl: './map-section.component.html',
  styleUrl: './map-section.component.css'
})
export class MapSectionComponent {
  options = {
    mapId: "",
    center: { lat: 40.628871, lng: 22.945174 },
    zoom: 4,
  };
  center = { lat: 40, lng: 22 }
  constructor(){
    
  }


}
