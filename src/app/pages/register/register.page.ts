import { Component, OnInit } from '@angular/core';
import { localStorageProvider } from 'src/app/lib/localStorageProvider';
import { UserService } from 'src/app/services/userService.service';
import { Router, NavigationEnd } from '@angular/router';
import { ToastService } from 'src/app/services/toastService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private userService : UserService,
    private router: Router,
    private toastService : ToastService,
  ) { }

  public user :any={};
  public spinner: boolean;

  ngOnInit() {
  }

  submit(){
     this.userService.addUser(this.user).subscribe((response: any) => { 
      this.login();
  })
}
async login(){
  await this.userService.login(this.user.email,this.user.password).then((sub: any) => {
    sub.subscribe((res:any)=> {
      if(res.code == "SUCCESS") {
        this.router.navigate(['/home']);
      localStorageProvider.setObject("userInfo", this.prepareUserInfo(res.data.user));
    }
    this.spinner = false
  })
  }, error => {
    this.toastService.openToast("Error en la conexión", false);
    this.spinner = false;
  });
}

  prepareUserInfo(infoUser : any){
    let userInfo = {
      id : infoUser.id,
      username : infoUser.username,
      name : infoUser.name,
      email : infoUser.email
    }
    return userInfo;
  }
}
