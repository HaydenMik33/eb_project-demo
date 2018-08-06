import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  modalSwitch: boolean
  constructor() { }
  openModal(){
    this.modalSwitch = true
  }
  closeModal(){
    this.modalSwitch=false;
  }
}
