import { Component }from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {FormGroup, FormControl,  FormBuilder,  Validators} from '@angular/forms';
import {Restaurants} from './../../../Restaurants';

@Component({
    moduleId : module.id,
    selector : 'add-hotel-form',
    templateUrl : 'addhotel.component.html',
    styleUrls: ['./addhotel.component.scss'],
})

export class AddHotelComponent {
    restaurants : Restaurants[];
    restaurantForm: FormGroup;
    constructor(private fb: FormBuilder){
        this.createForm();
    }
    createForm() {
        this.restaurantForm = this.fb.group({
            name: ['', Validators.required ],
            tagline: ['', Validators.required ],
            code: ['', Validators.required ],
            address: ['', Validators.required ],
            landmark: ['', Validators.required ],
            street: ['', Validators.required ],
            city: ['', Validators.required ],
            state: ['', Validators.required ],
            phone1: ['', Validators.required ],
            phone2: ['', Validators.required ],
            description: ['', Validators.required ],
        });
    }

    addRestaurants(){
        console.log('Prepare a form: ');
    };
    hotelAdd(){
        console.log('Hotels Add');
    }
    addCoin(name, tag, code, address, landmark, street, city, state, phone1, phone2, desc) {
        console.log('Hey : ', name, tag);
        var restaurantDetails = {
            name : name,
            tagline : tag,
            stall_id: code,
            description : desc,
            contact1: phone1,
            contact2: phone2,
            address : address,
            landmark : landmark,
            street : street,
            city : city,
            state : state 
        };
        console.log('Restaurant Details : ', restaurantDetails);
    }
}