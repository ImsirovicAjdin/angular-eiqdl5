import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <div *ngFor="let car of cars">
        <div style="min-height:100px; max-width: 200px; border: 1px solid gray; color: white; background: tomato; margin-bottom: 20px; padding: 20px;">


          <p>{{car.make}}</p>
          <p>{{car.color}}</p>


        </div>
      </div>
    </div>
  `
})
export class AppComponent  {

  cars = [
    {
      id: 1,
      make: 'Toyota',
      color: 'red'
    },
    {
      id: 2,
      make: 'VW',
      color: 'gray'
    },
    {
      id: 3,
      make: 'Chrysler',
      color: 'blue'
    }
  ]

}
