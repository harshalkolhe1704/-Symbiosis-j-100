import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent 
{
  navMenus:any = [
    {
      item:'Home',
      path:'/'
    },{
      item:'Movies List',
      path:'/movies'
    },{
      item:'Add New Movie',
      path:'/movie-add'
    }
  ]

}
