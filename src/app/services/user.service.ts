import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031",
      "website": "hildegard.org",
    }
  ]

  constructor(
    private _http: HttpClient
  ) { }

  public getUsers(): Observable<any[]> {
    return of(this.users);
  }

  public addUser(newUser) {
    newUser.id = Math.floor(Math.random() * 10);
    this.users.push(newUser);
  }

  public trashUser(user) {
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i] == user) {
        this.users.splice(i, 1);
      }
    }
    
  }


}
