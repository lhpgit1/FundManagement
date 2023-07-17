import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})

export class DefaultComponent {
  siderbaropen=true;
  constructor(){

  }
  ngOnInit(): void {
    
  }
  siderBarToggler(){
    this.siderbaropen=!this.siderbaropen;
  }
}
