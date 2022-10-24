import { Component, OnInit } from '@angular/core';
import { PusherServiceProvider } from 'src/app/services/pusherService.service';
@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.page.html',
  styleUrls: ['./trophies.page.scss'],
})
export class TrophiesPage implements OnInit {

  public comments :any =[] ; 
  public newComment : any = {};
  public message :any;
  rating = {
    bad : 0,
    good : 0,
  }

  constructor(private pusher : PusherServiceProvider ) { }


/*   ionViewDidLoad(){
    const channel = this.pusher.init();
    channel.bind('message', (data) => {
      if(data.score >= 1){
        this.rating.good = this.rating.good + 1;
      }
      else{
        this.rating.bad = this.rating.bad + 1;
      }
      this.comments.push(data);
    })
  } */
  
  ngOnInit() {
    this.comments = [
      {
          id: 1,
          author: {
              name: 'Jan-Kanty Pawelski',
              email: 'jan.kanty.pawelski@gmail.com',
              website: 'pawelski.io'
          },
          content: 'I made it! My awesome angular comment system. What do you think?',
          loved: false
      },
      {
          id: 2,
          author: {
              name: 'Tomasz Jakut',
              email: 'comandeer@comandeer.pl',
              website: 'comandeer.pl'
          },
          content: 'Nice looking. Good job dude ;)',
          loved: true
      }
    ];
  }

}
