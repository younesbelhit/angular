import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[];
  user = {};

  constructor(
    private userService: UserService,
    private titleService: Title
  ) { }

  ngAfterViewInit(): void {
    
  }

  ngOnInit() {
    this.titleService.setTitle('users');
    this.userService.getUsers().subscribe((users) => {
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

}
