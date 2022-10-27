import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localStorageProvider } from 'src/app/lib/localStorageProvider';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class questionsComponent implements OnInit {

  public comments :any =[] ; 
  public newComment : any = {};
  public commentsList :any =[] ; 
  public comment : any;
  public message :any;
  public islogged: any;

  public post :any;
  private trivias : any = [{
    "id": 1,
    "views": [
      {
        "id": 3,
        "index": 3,
        "type": "CONTENT",
        "questions": [
          {
            "info": {
              "options": [
                {
                  "title": "La atención de un operador de Call Center es inmediata."
                },
                {
                  "title": "La información recibida es clara."
                },
                {
                  "title": "El operador escucha y demuestra empatía."
                },
                {
                  "title": "El operador de Call Center pregunta y entiende el requerimiento."
                },
                {
                  "title": "El operador de Call Center entiende y soluciona el requerimiento."
                },
                {
                  "title": "Es evidente que el operador de Call Center conoce sus herramientas."
                },
                {
                  "title": "No es necesario llamar repetidas veces para que el requerimiento sea resuelto."
                },
                {
                  "title": "La atención del operador es rápida y directa."
                },
                {
                  "title": "El operador de Call Center se asegura de que el requerimiento haya sido resuelto."
                }
              ]
            },
            "title": "Por favor marque una o mas casillas según corresponda para ayudarnos a entender los motivos de su calificación.",
            "type": "SELECT_MULTI_OPTION"
          }
        ]
      },
      {
        "id": 4,
        "index": 4,
        "type": "CONTENT",
        "questions": [
          {
            "info": {
              "options": [
                {
                  "title": "Es necesario esperar para que el agente atienda la llamada."
                },
                {
                  "title": "La información recibida es confusa."
                },
                {
                  "title": "El operador no demuestra interés en el problema reportado."
                },
                {
                  "title": "El operador de Call Center no entiende el requerimiento."
                },
                {
                  "title": "El operador de Call Center no soluciona mis requerimientos."
                },
                {
                  "title": "El operador de Call Center tiene dificultades para gestionar el requerimiento."
                },
                {
                  "title": "Es necesario hacer mas de una llamada para que el requerimiento sea resuelto."
                },
                {
                  "title": "La llamada es innecesariamente larga."
                },
                {
                  "title": "El operador de Call Center no se asegura que requerimiento haya sido resuelto."
                }
              ]
            },
            "title": "Por favor marque una o mas casillas según corresponda para ayudarnos a entender los motivos de su calificación.",
            "type": "SELECT_MULTI_OPTION"
          }
        ]
      },
      {
        "id": 6,
        "index": 6,
        "title": "Final",
        "nextView": 0,
        "type": "END",
        "message": "Gracias por su tiempo!!"
      }
    ]
  }]

  rating = {
    bad : 0,
    good : 0,
  }

  constructor(
    private router : Router,
  ) { }

  ngOnInit() {
    this.initializeVariables();
    this.setVariables();
   
  }

  initializeVariables(){
    this.post= {};
    this.commentsList = [];
    this.comment = "";
    this.islogged = this.checkIsLogged();
    console.log("IS LOGGED",this.islogged)
  }

  checkIsLogged(){
    let res = false;
    if(localStorageProvider.getObject('userInfo')){
       res = true;
    } 
    return res;
  }

  doRefresh(event) {
    this.ngOnInit();
    event.target.complete();
  }

  setVariables(){
    this.post = this.router.getCurrentNavigation().extras.state.post;
    document.getElementById('image-background').style.background = 'url('+this.post.image.url+') ';
  }

}























