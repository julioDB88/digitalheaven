import { Component, inject, model } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,

} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogData } from '../../comp/owner/owner';
@Component({
  selector: 'app-owner-form',
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './owner-form.html',
  styleUrl: './owner-form.css',
})
export class OwnerForm {
  readonly dialogRef = inject(MatDialogRef<OwnerForm>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly name = model(this.data.name);

  constructor() { }
  save() {
    this.dialogRef.close(this.name());
  }
  close(): void {
    this.dialogRef.close();
  }
}
