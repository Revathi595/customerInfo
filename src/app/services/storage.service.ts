import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: any) {
    localStorage.setItem(key, value)
  }

  get(key: string): any {
    return localStorage.getItem(key)
  }
}
