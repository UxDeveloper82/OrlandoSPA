import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RepairsService {

constructor(private http: Http) { }

  getAllRepairs() {
    return this.http.get('data/repairs.json').map(res => res.json());
  }
  getAllComments() {
    return this.http.get('data/comments.json').map(res => res.json());
  }

  getAllUsers() {
    return this.http.get('data/users.json').map(res => res.json());
  }
  getAllImages() {
    return this.http.get('data/images.json').map(res => res.json());
  }

}
