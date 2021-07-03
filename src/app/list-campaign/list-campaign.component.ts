import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCampaignComponent } from '../add-campaign/add-campaign.component';
import { CampaignDetailsComponent } from '../campaign-details/campaign-details.component';
import { FilterCampaignComponent } from '../filter-campaign/filter-campaign.component';
export interface ListCampaign {
  position: number;
  name: string;
  scheduled_at: string;
  from_number: number;
  contacts: string;
  contents: string;
  total_numbers: number;
  status: string;
  
}

const LIST_DATA: ListCampaign[] = [
  {position: 1, name: 'Sample', scheduled_at: '11 May', from_number: 545, contacts: 'Active subscribers', contents: 'template', total_numbers: 100, status: 'running'},
  
];
@Component({
  selector: 'app-list-campaign',
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.scss']
})
export class ListCampaignComponent {

  displayedColumns: string[] = ['position', 'name', 'scheduled_at', 'from_number','contacts','contents','total_numbers','status'];
  dataSource = LIST_DATA;
  teams: any[] = [
    { from_number: 'Moplet' },
    { status: 'Running' },
    { cotacts: 'Active' },
    { contents: 'Template' },
    { schedued_at: 'May 11' },
    { name: 'Sample' },
    { total_numbers: 'Tottenham Hotspur' },
  ]; 
  processed_numbers:number;
  constructor( private dialog: MatDialog){}
  addCampaign() {
    this.dialog.open(AddCampaignComponent, {
      width: '550px',
      height: '250px'
        
    });
}
totalNumbers(){
    this.dialog.open(CampaignDetailsComponent, {
    /* width: '300px',
    panelClass: 'dialog-container-custom' */
    width: '450px',
      height: '250px'
});
}
}

