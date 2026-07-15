import { Component } from '@angular/core';
import { Owner } from "../../lib/comp/owner/owner";



export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-admin',
  imports: [Owner],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {





  openSoulmateModal(): void {
    console.log('Opening Soulmate modal!');
  }
}
