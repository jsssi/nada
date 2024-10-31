import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-forget-password-modal',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './forget-password-modal.component.html',
  styleUrl: './forget-password.scss'
})
export class ForgetPasswordModalComponent {

}
