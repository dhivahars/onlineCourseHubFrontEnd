import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courselist',
  imports: [],
  templateUrl: './courselist.html',
  styleUrl: './courselist.scss',
})
export class Courselist implements OnInit{
  courses!:any;
  baseUrl:string="http://localhost:8080/courses"
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.courses=this.http.get(`${this.baseUrl}/list`,{headers})
  }
}
