import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LaunchFilterComponent } from '../launch-filter/launch-filter.component';

@Component({
  selector: 'app-spacex-launches',
  standalone: true,
  imports: [CommonModule, HttpClientModule, LaunchFilterComponent],
  templateUrl: './spacex-launches.component.html',
  styleUrl: './spacex-launches.component.css'
})
export class SpacexLaunchesComponent implements OnInit {
	launches: any[] = [];
	filteredLaunches: any[] = [];
	constructor(private http: HttpClient) {}
	ngOnInit(){
	this.http.get<any[]>('https://api.spacexdata.com/v4/launches')
		.subscribe(data=> { this.launches = data; this.filteredLaunches = [...this.launches];
		});
	}
	filterSuccess(){
		this.filteredLaunches = this.launches.filter(launch => launch.success);
	}
}
