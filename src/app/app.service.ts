import { Injectable } from '@angular/core';
import { FormElement } from './modal';

@Injectable({
    providedIn: 'root'
})

export class formDisplayService{

    public newForm: FormElement[] = []

    public getId = 0;

    constructor(){}

    save(newformdata){
            newformdata.id = this.generateId();
            this.newForm.push(newformdata);
    }

    getdetails(): FormElement[]{
        return this.newForm;
    }

    generateId(){
        this.getId = this.getId+1;
        return this.getId;
      }

}