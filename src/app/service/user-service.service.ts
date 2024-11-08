import { Injectable } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private users: User[] = [];
  constructor() {
    this.loadLocalStorage();
  }
  private loadLocalStorage() {
    const data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data)
    }
  }
  private SaveInLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  setUSer(user: User) {
    this.users.push(user);
    this.SaveInLocalStorage();
  }
  getUsers(): User[] {
    return this.users;
  }
}
