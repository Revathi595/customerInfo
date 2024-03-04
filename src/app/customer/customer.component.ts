import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public storage: StorageService) { }
  public initObj: any = { name: '', empId: '', city: '', gender: '' };
  public customerObj: any = {
    initObj: JSON.parse(JSON.stringify(this.initObj)), cityList: [
      { id: 1, name: 'New York' },
      { id: 2, name: 'London' },
      { id: 3, name: 'Tokyo' }],
    genderList: [{ id: 1, name: 'Male', check: false }, { id: 2, name: 'Female', check: false }],
    getData: {}
  };

  public saveForm() {
    this.storage.set('customerInfo', JSON.stringify(this.customerObj.initObj));
    this.customerObj.initObj = JSON.parse(JSON.stringify(this.initObj));
    this.getCustomerInfo();
  }
  public getCustomerInfo() {
    let data: any = this.storage.get('customerInfo');
    this.customerObj.getData = (data && data.length > 0) ? JSON.parse(data) : [];
  }

  public editRecord(obj: any) {
    this.customerObj.initObj = JSON.parse(JSON.stringify(obj));
  }

  public setGender(obj: any) {
    if (obj.check) {
      this.customerObj.initObj.gender = obj.name;
    } else {
      this.customerObj.initObj.gender = '';
    }
    this.customerObj.genderList.forEach((item: any) => {
      if (item.name != obj.name) {
        item.check = false;
      }
    })
  }
  ngOnInit(): void {
    this.getCustomerInfo();
  }

}
