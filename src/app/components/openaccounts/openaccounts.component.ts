import { Component, OnInit } from '@angular/core';
import { WaiterserviceService } from '../../services/waiterservice.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { FilterPipe } from '../../pipe/filter.pipe';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-openaccounts',
  templateUrl: './openaccounts.component.html',
  styleUrls: ['./openaccounts.component.css'],
})
export class OpenaccountsComponent implements OnInit {

  dialogRef: MdDialogRef<any>;
  message: string;
  openedAccounts: any[] = [];
  toggle: any = {};
  searchText: any;
  user: any;
  alertMessage: any;
  askedToClose = 'Asked To Close';

  /*
  searchOptions = [
    'Cliente',
    'Mesa',
    'Conta',
    'Item'
  ];
  */

  constructor(private waiterServices: WaiterserviceService,
    public dialog: MdDialog, private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);

    // this.updateView();

    this.timeout();
  }

  timeout() {
    const _self = this;
    this.updateView();
    setTimeout(() => {
        _self.timeout();
    }, 30000);
  }

  updateView() {
    this.openedAccounts = [];

    this.waiterServices.getOpenedAccounts()
      .subscribe((accountData) => {

        accountData.forEach(account => {
          if (account.customer) {
            this.openedAccounts.push(account);
          }
        });
        console.log(this.openedAccounts);
        this.openedAccounts.sort((account) => {
          if (account.status === this.askedToClose) {
            return -1;
          } else if (account.status !== this.askedToClose) {
            return 1;
          } else {
            return 0;
          }
        });
      });
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['']);
    return false;
  }

  // CLOSE ACCOUNT METHOD
  closeAccount(account) {
    account.status = 'Closed';
    console.log(account);
    this.dialogRef = this.dialog.open(DialogComponent);
    this.dialogRef.componentInstance.closedAccount = account;
    this.dialogRef.componentInstance.message = 'Do you want close this account?';

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('after closed');

      this.updateView();
    });

  }

  // REMOVE ITEM
  removeItem(account, item) {
    const removeData = {
      accountId: account._id,
      itemId: item._id,
      item: item
    };
    console.log(removeData);

    this.dialogRef = this.dialog.open(DialogComponent);
    this.dialogRef.componentInstance.message = 'Do you want remove this item?';
    this.dialogRef.componentInstance.removeData = removeData;

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('after closed');

      this.updateView();
    });
  }

}

/*
this.openedAccounts = [];

      this.waiterServices.getOpenedAccounts()
        .subscribe((accountData) => {

          accountData.forEach(account2 => {
            if (account2.customer) {
              this.openedAccounts.push(account2);
            }
          });
          console.log(this.openedAccounts);
        });
        */