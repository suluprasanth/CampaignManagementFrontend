import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export class DialogData {
  processed_number: number;
  processing_number: number;
}
@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})

export class CampaignDetailsComponent implements OnInit {
  campaignDetailsForm: FormGroup;
  dialogRef: any;
  constructor() { }

  ngOnInit(): void {
    this.dialogRef.updatePosition({ top: `30px`,
    right: `40px`});
  
  }
  @Inject(MAT_DIALOG_DATA) public data: DialogData 
}
