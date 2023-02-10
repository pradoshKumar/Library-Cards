import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'librarycard',
  templateUrl: './librarycard.component.html',
  styleUrls: ['./librarycard.component.scss'],
})
export class LibraryCardViewComponent {
  users;

  constructor(private http: Http) {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .map((res) => res.json())
      .subscribe((res) => (this.users = res));
  }
}
