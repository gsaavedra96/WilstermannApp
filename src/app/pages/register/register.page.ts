import { Component, OnInit } from '@angular/core';
import { localStorageProvider } from 'src/app/lib/localStorageProvider';
import { UserService } from 'src/app/services/userService.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private userService : UserService,
    private router: Router
  ) { }

  public user :any={};

  ngOnInit() {
  }

  initHome(){
    console.log("LOGIN");
    localStorageProvider.setObject("userInfo", this.prepareUserInfo());
  }

  submit(){
    this.userService.addUser(this.user).subscribe((response: any) => { 
      localStorageProvider.setObject("userInfo", this.prepareUserInfo());
      this.router.navigate(['/home']);
      console.log("SUBMIT",this.user);
    });
  }

  prepareUserInfo(){
    let userInfo = {
      username : this.user.username,
      name : this.user.name,
      email : this.user.email
    }
    return userInfo;
  }
}
