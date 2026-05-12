import { Component } from '@angular/core';
import { LucideX, LucidePhone, LucideMap, LucideMail, LucideIcon } from '@lucide/angular';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly TwitterIcon = LucideX;
  readonly PhoneIcon = LucidePhone;
  readonly MapIcon = LucideMap;
  readonly MailIcon = LucideMail;
  footerDate = new Date().getFullYear();
}
