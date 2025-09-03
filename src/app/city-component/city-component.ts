import { Component } from '@angular/core';
import { City } from './city';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-city-component',
  standalone: false,
  templateUrl: './city-component.html',
  styleUrl: './city-component.css'
})
export class CityComponent {


      cities: City[] = [];
      formGroupCity: FormGroup;

      constructor (private formBuilder: FormBuilder) {
          this.formGroupCity = this.formBuilder.group({
              name: [''],
              state: [''],
              population: [''],
              gentle: [''],
              description: ['']
          });
        }

  save() 
  {
    this.cities.push(this.formGroupCity.value);
    this.formGroupCity.reset();
  }
}