import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ForgetPasswordModalComponent } from "../forget-password-modal/forget-password-modal.component";
import { NgIf } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ForgetPasswordModalComponent, RouterLink, RouterLinkActive , ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  @ViewChild('main') containerRef!: ElementRef;
  @ViewChild('register', { static: false }) registerButtonRef!: ElementRef;
  @ViewChild('login', { static: false }) loginButtonRef!: ElementRef;


  constructor(private renderer: Renderer2 , private Router:Router){ }
  private formBuilder = inject(FormBuilder);
  protected loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  ngAfterViewInit() {

    if (this.registerButtonRef) {
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
  onCLick(event:Event){
    event.preventDefault();
    this.Router.navigate(['/home']);
  }
}
