import { Component, OnInit } from '@angular/core';
import { RepairsService } from './../_services/repairs.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
   users: Array<any>;
   error: string;

  constructor(private repairsService: RepairsService) { }

  ngOnInit() {
    this.repairsService.getAllUsers()
    .subscribe(
      data => this.users = data,
      error => this.error = error.statusText
    );
  }

}
