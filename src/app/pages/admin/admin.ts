import { Component } from '@angular/core';
import { Soulmate } from "../../lib/comp/soulmate/soulmate";



export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-admin',
  imports: [Soulmate],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {





  openSoulmateModal(): void {
    console.log('Opening Soulmate modal!');
  }
}
