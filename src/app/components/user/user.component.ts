import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: any[];
  private user = {};
  private sub: any

  constructor(
    private userService: UserService,
    private titleService: Title
  ) { }

  
  ngOnInit() {
    this.titleService.setTitle('users');
    this.sub = this.userService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }

  public addUser() {
    this.userService.addUser(this.user);
  }

  public trashUser(user) {
    if(confirm('Are you sure ?')) {
      this.userService.trashUser(user);
    }
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
