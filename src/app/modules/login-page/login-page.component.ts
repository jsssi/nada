import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { User } from '../../model/user';



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
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
  //forms login and RegisterPage
  RegisterForm!: FormGroup;
  LoginForm!: FormGroup;
  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.users)
    this.RegisterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),

    })
    this.LoginForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    })


  }

 onCLick(event: Event) {
    event.preventDefault();
    const nome = String(this.LoginForm.get('nome')?.value || '').trim();
    const senha = Number(this.LoginForm.get('senha')?.value)

    console.log("Email:", nome, "Senha:", senha); // Verificar os valores no console

    // Verifica se existe um usuário com as credenciais fornecidas
    this.users.forEach(user =>{
      if(user.name == nome && user.senha == senha ){
        this.Router.navigate(['/home']);
        return;
      }else{
        alert('usuario ou senha Invalidos')
      }
    })


  }
  //service User//
  addUser() {
    const newUser = this.RegisterForm.value;
    this.userService.setUSer(newUser);
    this.users = this.userService.getUsers();
    console.log(this.users);
  }
  //form login//

}
