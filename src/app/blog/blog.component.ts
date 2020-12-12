import { Component, OnInit } from '@angular/core';
import { RepairsService } from './../_services/repairs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  comments: Array<any>;
  error: string;

  constructor(private repairsService: RepairsService ) { }

  ngOnInit() {
     this.repairsService.getAllComments()
         .subscribe(
           data => this.comments = data,
           error => this.error = error.statusText
         );
  }

}
