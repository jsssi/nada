import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ForgetPasswordModalComponent } from "../forget-password-modal/forget-password-modal.component";
import { NgIf } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import User from '../../model/user';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ForgetPasswordModalComponent, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  users: User[] = [];
  

  @ViewChild('main') containerRef!: ElementRef;
  @ViewChild('register', { static: false }) registerButtonRef!: ElementRef;
  @ViewChild('login', { static: false }) loginButtonRef!: ElementRef;


  constructor(private renderer: Renderer2, private Router: Router, private userService: UserServiceService) {

  }
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  ngAfterViewInit() {

      if(this.registerButtonRef) {
      this.renderer.listen(this.registerButtonRef.nativeElement, 'click', () => {

        if (this.containerRef) {
          this.renderer.addClass(this.containerRef.nativeElement, 'right-panel-active');
        }
      });
    }
    if (this.loginButtonRef) {
      this.renderer.listen(this.loginButtonRef.nativeElement, 'click', () => {

        if (this.containerRef) {
          this.renderer.removeClass(this.containerRef.nativeElement, 'right-panel-active');
        }
      })
    }
  }
  onCLick(event: Event) {
    event.preventDefault();
    this.Router.navigate(['/home']);

    this.addUser();  //adicionar novo usuario ao array de users
  }
  //service User//
  addUser() {
    const newUser: User = {
      idUser: '9',
      nameUser: 'Novo Usuario',
      emailUser: 'novoUsuario@email.com'
    }
    this.userService.setUSer(newUser);
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

}
