import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  add(myf:any){

    let id:any = myf.value.num;
    let name :any = myf.value.name;
    let username:any = myf.value.username;
    let email :any = myf.value.email;
    let phone:any = myf.value.phone;

    alert("Vous avez ajouter un étudiant " + id + name + username + email +phone);
    this.router.navigate(['/listStudent']);
  }

}
