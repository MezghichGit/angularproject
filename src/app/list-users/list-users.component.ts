import { Component, OnInit } from '@angular/core';
import {UserService } from '../services/user.service'
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  noms:string[]=[];
  etudiants:any;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.noms = this.service.getUsers();
    console.log(this.noms);

    this.service.getStudents().subscribe(
      data => {
        console.log(data);
        this.etudiants =data;
      }
    );

  }

}
