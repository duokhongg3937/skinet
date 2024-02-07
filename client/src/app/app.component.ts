import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet Client';
  products: any[] = [];

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/products").subscribe({
      next: (response: any) => this.products = response.data,
      error: error => console.log(error),
      complete: () => {
        console.log("Request Completed");
        console.log("Extra Statement");
      }
    })
  }
}
