import { Component, OnInit } from '@angular/core';
import { RepairsService } from './../_services/repairs.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Array<any>;
  error: string;

  constructor(private repairsService: RepairsService) { }

  ngOnInit() {
      this.repairsService.getAllImages()
          .subscribe(
               data => this.images = data,
               error => this.error = error.statusText
          );
  }

}
