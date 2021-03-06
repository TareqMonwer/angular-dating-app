import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    /**
     * DEPRECATED WAY OF USING subsrcibe() method.
     */
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
    //   this.users = response;
    // }, error => {
    //   console.log(error);
    // })

    this.http.get('http://127.0.0.1:8000/users/').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    })
  }
}
