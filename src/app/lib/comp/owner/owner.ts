import { Component, signal, model, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OwnerForm } from '../../forms/owner-form/owner-form';
export interface DialogData {
  name: string;
}
@Component({
  selector: 'app-owner',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './owner.html',
  styleUrl: './owner.css',
})
export class Owner {

  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openOwnerModal(): void {
    const dialogRef = this.dialog.open(OwnerForm, {
      data: { name: this.name() },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.name.set(result);
      }
    });
  }


}
