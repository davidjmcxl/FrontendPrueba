import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  stateMenu=false;
  private authService=inject(AuthService);
  changePage(){
    this.stateMenu=!this.stateMenu;

  }
  ngOnInit() {


  }
  logout(){
    this.authService.logout();
  }

}
