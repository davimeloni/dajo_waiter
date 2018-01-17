import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  prop: any;

  transform(accounts: any, filterText: any, searchOption: any): any {

    // tslint:disable-next-line:curly
    if (!filterText) return accounts;

    return accounts.filter(account => {
      for (const key in account) {
        if ((typeof account[key] === 'string' || account[key] instanceof String) &&
          (account[key].indexOf(filterText) !== -1)) {
          return true;
        } else if (account.customer.username.toLowerCase().includes(filterText.toLowerCase())) {
          return true;
        }
      }
    });

    /*
    // Custom Filter
    return accounts.filter(function(account) {
      if (searchOption === 'Cliente') {
        return account.customer.username.toLowerCase().includes(filterText.toLowerCase());
      } else if (searchOption === 'Mesa') {
        return account.table.indexOf(filterText);
      }
    });
    */
  }
}
