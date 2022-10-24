import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/commentService.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  public commentsList :any =[] ; 
  public newComment : any = {};
  public message :any;
  private newsId;

  rating = {
    bad : 0,
    good : 0,
  }

  constructor(
    private commentService : CommentService
  ) { }

  ngOnInit() {
    this.initializeVariables;
    this.getComments()
  }

  initializeVariables(){
    this.commentsList = [];
  }

  getComments (){
    let data : any = {
      newsId : this.newsId
    }
    this.commentService.commentListByNewId(data).subscribe((response: any) => { 
      this.commentsList = response.data;
    });
    console.log("GET RESPONSE",this.commentsList)
  }

  addComment(comment : any){
    let data : any = {
      newsId : this.newsId,
      content : comment,
      //userId : this.userId.name
    }
    this.commentService.addCommentByNewId(data).subscribe((response: any) => { 
      this.commentsList = response.data;
    });

    this.getComments()
  }

}
