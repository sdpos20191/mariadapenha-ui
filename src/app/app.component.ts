import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maria da Penha';
  texto : string = 'Ocorrências - Maria da Penha';
  
  // google maps zoom level
  zoom: number = 13;
  
  // initial center position for the map
  lat: number = -8.050532;
  lng: number = -34.950948;

  // adjust for API consumption
  markers: marker[] = [
	  {
		  lat: -8.042416,
		  lng: -34.957986,
		  label: 'O',
		  draggable: true
	  },
	  {
      lat: -8.069230,
		  lng: -34.920681,
		  label: 'O',
		  draggable: false
	  },
	  {
		  lat: -8.048709,
		  lng: -34.928970,
		  label: 'O',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;

}
