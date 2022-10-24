import { Component, OnInit } from '@angular/core';
//import {MatButtonModule, MatCardModule} from '@angular/material';
//import {MdCardModule} from '@angular/material';
import {FootballDataService} from 'src/app/services/football-data.service';
import { HttpClient } from '@angular/common/http';
import results from '../../files/results.json';
import { MatchService } from 'src/app/services/matchService.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  public data: any;
  public columns: any;
  public rows: any;
  public matchList:any;
  public playedMatches;
  public futureMatches;
  public filter: any;
  
  public table:any = {};
  public gameweek:any = results;
  constructor(
    private http: HttpClient,
    private footballData: FootballDataService,
    private matchService : MatchService
  ) {
    
  }

  ngOnInit() {
    this.initializeVariables();
    this.listMatch();
  }


  ionViewWillEnter() {
    this.listMatch();
  }


  initializeVariables(){
    this.matchList = [];
    this.playedMatches = [];
    this.futureMatches = [];
    this.filter = 'Partidos Futuros';
  }

  listMatch(){
    this.matchService.matchList({}).subscribe((response: any) => { 
      this.matchList = response.data;
    });
  }

  parseMatches(){
    this.matchList.forEach(element => {
      if(element.details  == "Finalizado"){
        this.playedMatches.push(element);
      } else{
        this.futureMatches.push(element);
      }
    });
  }

  assignMatches(){
    let matches : any = [];
    this.matchList.forEach((element :any) => {
        if (this.filter == "Partidos Futuros" && element.details == "Por Jugar"){
          matches.push(element);
        }
        if (this.filter == "Partidos Jugados" && element.details == "Finalizado"){
          matches.push(element);
        }
    });
    console.log("MATCH",matches)
    return matches;
  }

}
