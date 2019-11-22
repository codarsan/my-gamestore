import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { IFeedback } from 'src/app/domain/IFeedback';

@Component({
  selector: 'app-feedback-list',
  templateUrl: 'feedback-list.component.html'
})
export class FeedbackListComponent implements OnInit {

  data: IFeedback[];
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackService.getAllFeedbacks().subscribe(
      res => {this.data = res; },
      err => console.log(`there was an exception : {err} `)
    );
  }

}
