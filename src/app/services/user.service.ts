import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users :string[] = ["amine","sylvan","romain"];
  students:any[]=[];

  // injection de dépendence = un objet http de type HttpClient
  constructor(private http : HttpClient) { }

  getUsers()
  {
    return this.users;
  }

  getStudents()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
