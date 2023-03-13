import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

 

  ngOnInit() {
    this.username = localStorage.getItem("signedInUsername");
    this.datas = localStorage.getItem('taskList')
    this.tasksList = JSON.parse(this.datas ||'{}')

  }
  ngDoCheck(){
    // this.tasksList = JSON.parse(this.datas ||'{}')
    // this.datas = localStorage.getItem('taskList')
    // this.tasksList = JSON.parse(this.datas ||'{}')
  }
  signOut() {
    localStorage.clear()
    this.router.navigate(['welcome'])
  }
  username: any;
  tasksList :any =[]
  task:string =''
  taskk :any=[]
  taskdes  ={}
  datas :any;
add(){
  this.taskdes = {
    task:this.task,
    done:false,
  }

  this.taskk.push(this.taskdes);
  localStorage.setItem("taskList",JSON.stringify(this.taskk))
 this.datas = localStorage.getItem('taskList')
 if(JSON.parse(this.datas) == null){
  this.tasksList = {}
  console.log('null')
 }
 else{
  this.tasksList = JSON.parse(this.datas)
  console.log('data is there')
 }
    // this.tasksList = JSON.parse(this.datas ||'{}')
  this.task =''
}
delete(i:any){
  
}


}
