import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { GoogleMap } from '@angular/google-maps';
import { environment } from '../../environment/environment';
import { LoadMapService } from '../service/load-map.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css'],
  standalone: false
})
export class DashboardComponentComponent implements OnInit {

  valores?: any[];
  constructor(
    private mark: LoadMapService,
  ) { }
  ngOnInit(): void {
    this.mark.getItems2().subscribe(Response => {
      this.valores = Response;
      console.log(this.valores)
    });
   
  }
  center: google.maps.LatLngLiteral = { lat: 8.537981, lng: -80.782127 };
  zoom = 6;
  markerPositions: google.maps.LatLngLiteral[] = [{ lat: 8.4460, lng: -79.9090 }, { lat: 8.88028, lng: -79.7833 }];
 

 


}

