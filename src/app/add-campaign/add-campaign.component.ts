import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.scss']
})
export class AddCampaignComponent implements OnInit {
  addCampaignForm: FormGroup;
  selectedContact: string;
  contacts: string[] = ['All subscribers', 'Active subscribers', 'External file'];
  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    if (!this.addCampaignForm.valid) {
      return;
    }
    console.log(this.addCampaignForm.value);
  }
}
