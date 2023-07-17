import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() togglerSiderBarForMe: EventEmitter<any>=new EventEmitter();

  constructor(){
  }
 ngOnInit(): void {  
 }
 toggleSiderBar(){
  this.togglerSiderBarForMe.emit();
  //当侧边栏拉出收起的时候重新调整表单大小
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 300);
 }
}
