import { Component, OnInit } from '@angular/core';
//import { StreamingMedia, StreamingVideoOptions,StreamingAudioOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.page.html',
  styleUrls: ['./stream.page.scss'],
})
export class StreamPage implements OnInit {

  constructor(
    //private streamingMedia: StreamingMedia
    ) { }

  ngOnInit() {
  }

 /*  startVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };
    
    this.streamingMedia.playVideo('https://path/to/video/stream', options);
  }

  startAudio(){
    console.log("audio");
    let options: StreamingAudioOptions = {
      successCallback: () => {console.log()},
      errorCallback: (e) => {console.log()},
      //initFullscreen : false, 
    }
    this.streamingMedia.playAudio('http://soundbible.coom/grab.php?id=2196&type=mp3', options);
  } */

}
