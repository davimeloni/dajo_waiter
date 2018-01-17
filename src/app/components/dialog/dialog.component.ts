import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { WaiterserviceService } from '../../services/waiterservice.service';
import { OpenaccountsComponent } from '../../components/openaccounts/openaccounts.component';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  message: string;
  removeData: any;
  closedAccount: any;

  constructor(public dialogRef: MdDialogRef<DialogComponent>,
              public waiterService: WaiterserviceService) { }

  ngOnInit() {
  }

  removeItemAccount() {
    console.log(this.removeData);
    this.waiterService.removeItemAccount(this.removeData)
      .subscribe((res) => {
        console.log(res);
        this.dialogRef.close();
      });
  }

  closeAccount() {
    console.log(this.closedAccount);
    this.waiterService.closeAccount(this.closedAccount)
      .subscribe((res) => {
        //console.log('chegou aqui?');
        console.log(res);
        this.dialogRef.close();
      });
  }
}


