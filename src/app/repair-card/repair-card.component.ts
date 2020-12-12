import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Repair } from './../repair';

@Component({
  selector: 'app-repair-card',
  templateUrl: './repair-card.component.html',
  styleUrls: ['./repair-card.component.css']
})
export class RepairCardComponent implements OnInit {

  repairs: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRepairs();

  }

  getRepairs() {
    this.http.get('http://uxdeve82-001-site3.itempurl.com/api/repairs').subscribe(response => {
         this.repairs = response;
    }, error => {
      console.log(error);
    });

 }

}
