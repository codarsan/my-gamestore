import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements OnInit {

  submitted = false;
  feedbackFormGroup: FormGroup;
  nameControl: FormControl;
  emailControl: FormControl;
  commentsControl: FormControl;
  formValues;

  constructor(private feedbackService: FeedbackService) {
  }

  addFeedback() {
    this.feedbackService.createFeedback(this.formValues.nameControl,
       this.formValues.emailControl,
       this.formValues.commentsControl)
       .subscribe(() => {
         this.feedbackFormGroup.reset();
         this.submitted = true; });
  }

  saveValues(submittedValues) {
    this.formValues = submittedValues;
    this.addFeedback();
  }

  ngOnInit() {
    this.submitted = false;
    this.nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
    this.commentsControl = new FormControl('', [Validators.required, Validators.minLength(20)]);
    this.feedbackFormGroup = new FormGroup ({
      nameControl: this.nameControl,
      emailControl: this.emailControl,
      commentsControl: this.commentsControl
    });
    }

}
