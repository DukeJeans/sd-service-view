import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestUserAppComponent } from './test-user-app/test-user-app.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestUserAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  isLoggedIn = true;

  city = 'Denver';

  operatingSystems = [
    {
      id: 'windows',
      name: 'Windows'
    },
    {
      id: 'osx',
      name: 'MacOS'
    },
    {
      id: 'linux',
      name: 'Linux'
    }
  ];
  
  users = [
    {id: 0, name: 'Sarah'}, 
    {id: 1, name: 'Amy'}, 
    {id: 2, name: 'Rachel'}, 
    {id: 3, name: 'Jessica'}, 
    {id: 4, name: 'Poornima'}
  ];
}