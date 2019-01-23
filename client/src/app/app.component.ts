import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	
	//change it with your laravel API URL
	BASE_URL = 'http://127.0.0.1:8080';
	
	
	username:string = '';
	password:string = '';
	email:string = '';
	users:any;
	
	
	constructor( private http: HttpClient ) { 

	}
	
	
	// add a new user
	add(): void{
		
		if (this.username === '' || this.password === '' || this.email === '')
			return;
		
		this.http.post(this.BASE_URL +'/api/add', {
		  username: this.username,
		  password: this.password,
		  email: this.email
		})
		  .subscribe(
			res => {
			  console.log(res);
			  //add to UI
			  this.users.push({
				  username: this.username,
				  email: this.email
			  });
			  //clear input
			  this.username = '';
			  this.password = '';
			  this.email = '';
			},
			err => {
			  console.log('Error occured');
			}
		  );
	}

	
	
	ngOnInit(): void { 
		// Load all users from API
		this.http.get(this.BASE_URL + '/api/all').subscribe(data => {
			this.users = data;
		});
    }
	
	
	deleteAll(){
		// Make request
		this.users = [];
		this.http.get(this.BASE_URL + '/api/deleteAll').subscribe(data => {
			this.users = data;
		});
	}
	
	
	
}
