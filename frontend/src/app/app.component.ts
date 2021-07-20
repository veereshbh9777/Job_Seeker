import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
// import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'Angular with Spring Boot CRUD App';
constructor(public loginService:AuthenticationService) { }
ngOnInit() {
    
}

}
