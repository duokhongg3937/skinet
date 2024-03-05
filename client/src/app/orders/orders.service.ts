import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../shared/models/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = environment.apiUrl;
  private orderSource = new BehaviorSubject<Order | null>(null);
  orderSource$ = this.orderSource.asObservable();

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<Order[]>(this.baseUrl + "orders");
  }

  getOrder(id: string) {
    return this.http.get<Order>(this.baseUrl + `orders/${id}`);
  }
}
