import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FootballDataService {

  HEADERS = new HttpHeaders({ 'X-Auth-Token': 'dc25ff8a0521411385adbe5bb16aefc7' });
  COMPETITION_URL = 'http://api.football-data.org/v1/competitions/';
  PL_ID = 445;

  constructor(private http: HttpClient) { }

  getTable(): any{
    return this.http.get(this.COMPETITION_URL + this.PL_ID + '/leagueTable',
      { headers: this.HEADERS }).map(res => res as any);
  }

  getFixtures(matchDay: number): any {
    return this.http.get(this.COMPETITION_URL + this.PL_ID + '/fixtures?matchday=' + matchDay, { headers: this.HEADERS })
      .map(res => res as any);
  }

}
