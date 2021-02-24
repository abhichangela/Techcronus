import { Component, OnInit } from '@angular/core';
import { formDisplayService } from './app.service';
import { PopupComponent } from './popup/popup.component';
import {MatDialog} from '@angular/material/dialog';
import { FormElement } from './modal';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

    displayDetail: FormElement[];
    public newDisplay;
    public personDetail = false;
    public selectedItemsList = []

    constructor(public dialog: MatDialog,public _service: formDisplayService) {}

    ngOnInit(){
        this.displayDetail = this._service.getdetails();
    }

    public openForm(){
        const dialogOpen = this.dialog.open(PopupComponent,{
            width: '400px', height: '500px'
        });
      }

    nameFun(data){
        this.newDisplay = data;
        this.personDetail = true;
    }

    selectedChange(){
        this.selectedItemsList = this.displayDetail.filter((value,index)=>{
            return value.isChecked;
        })
    }

    removeData(){
        let flag = confirm('Are you sure? want to delete?');
        if(flag==true){
            for(var i=this.displayDetail.length-1; i>=0; i--){
                for(var j=0; j<this.selectedItemsList.length; j++){
                    if(this.displayDetail[i] && (this.displayDetail[i].id == this.selectedItemsList[j].id)){
                        this.displayDetail.splice(i,1);
                    }
                }
            }
        }
    }
}