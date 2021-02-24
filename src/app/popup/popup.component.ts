import { Component, OnInit } from '@angular/core';
import { FormElement } from '../modal';
import { NgForm } from '@angular/forms';
import { formDisplayService } from '../app.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  public SaveDetails: FormElement[];

  public SaveData = {
    id: null,
    fname: null,
    lname: null,
    gender: null,
    age: null,
    city: null,
    country: null,
    isChecked: null
  }

  constructor(public _service: formDisplayService,
    public dialogOpen: MatDialogRef<PopupComponent>) { }

  ngOnInit() {
  }

  savedata(form: NgForm):void{
    const newformdata: FormElement = Object.assign({}, this.SaveData);
    this._service.save(newformdata);
    form.reset();
    this.dialogOpen.close();
  }

  closeBox(form){
    form.reset();
    this.dialogOpen.close();
  }

}
