import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token = '234242323512dsafsad54325gfds';
  private deviceType: any = 0;
  //apiURL: string = environment.endPointAPI;
  constructor(private http: HttpClient,
    private platform: Platform,
    private firebase: FirebaseX) {

      this.getToken();
    }

  getUser(data: any) {
    return this.http.post("http://216.122.168.190:8080/dialex/webresources/Wapp/user/get", { data, "token":"817dd8e5dc7c750d48a5e0a16cd625c8"});
  }

  addUser(data:any){
    return this.http.post("http://216.122.168.190:8080/dialex/webresources/Wapp/user/add", { data , "token":"817dd8e5dc7c750d48a5e0a16cd625c8"});
  }

  async login(email:any,password:any){

   // await this.getToken()
   console.log("email",email)
   console.log("password",password)
    let data = {
        'token': "817dd8e5dc7c750d48a5e0a16cd625c8",
        'data': {
            "user":{
                'email': email,
                'password': password,
            },
        "type": this.deviceType,
        "notificationId": this.token
        }
    };

    return this.http.post("http://216.122.168.190:8080/dialex/webresources/Wapp/user/login",  data );
  }


  private async getToken() {
    if (this.platform.is('android')) {
        this.deviceType = 1;
      this.token = await this.firebase.getToken()
    } 
    if (this.platform.is('ios')) {
        this.deviceType = 2;
      this.token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }
    console.log(this.token);
  }

  public getHeaders() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
