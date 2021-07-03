import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-filter-campaign',
  templateUrl: './filter-campaign.component.html',
  styleUrls: ['./filter-campaign.component.scss']
})
export class FilterCampaignComponent implements OnInit {
  filter = false;

  pageSize = 15;
  pageStart = 1;


  @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  pageEvent = {
      length,
      pageSize: 15,
      pageIndex: 0,
      previousPageIndex: 0,
  };
  sortEvent = {
      active: 'id',
      direction: 'desc',
      start: 'desc',
  };
  filterApplied = false;
  appliedFiltersForCharts = {
    client: '',
    messageType: '',
    deliveryStatus: '',
    fromDate: '',
    toDate: '',
};
  searchString = '';
  filterForm = new FormGroup({
      client: new FormControl(''),
      messageType: new FormControl(''),
      deliveryStatus: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
  });
  appliedFilters: { client_id: string; client: string; messageType_id: string; messageType: string; deliveryStatus_id: string; deliveryStatus: string; fromDate: string; toDate: string; };
  setAppliedFilters() {
    let filtered = false;
    for (const key in this.filterForm.value) {
        if (
            this.filterForm.value[key] !== null &&
            this.filterForm.value[key] !== ''
        ) {
            filtered = true;
        }
    }
    if (filtered) {
        this.filterApplied = true;
        this.appliedFilters = {
            client_id: '',
            client: '',
            messageType_id: '',
            messageType: '',
            deliveryStatus_id: '',
            deliveryStatus: '',
            fromDate: '',
            toDate: '',
        };
        this.setClientName();
        this.setMessageType();
        this.setDeliveryStatus();

        if (this.filterForm.get('fromDate').value !== '') {
            this.appliedFilters.fromDate = new Date(
                this.filterForm.get('fromDate').value
            ).toLocaleDateString();
        }
        if (this.filterForm.get('toDate').value !== '') {
            this.appliedFilters.toDate = new Date(
                this.filterForm.get('toDate').value
            ).toLocaleDateString();
        }
    } else {
        this.filterApplied = false;
        this.appliedFilters = {
            client_id: '',
            client: '',
            messageType_id: '',
            messageType: '',
            deliveryStatus_id: '',
            deliveryStatus: '',
            fromDate: '',
            toDate: '',
        };
    }
}
teams: any[] = [
  { name: 'Liverpool' },
  { name: 'Manchester City' },
  { name: 'Manchester United' },
  { name: 'Arsenal' },
  { name: 'Leicester City' },
  { name: 'Chelsea' },
  { name: 'Tottenham Hotspur' },
];
clearSearch() {
  this.filterForm = new FormGroup({
      client: new FormControl(''),
      messageType: new FormControl(''),
      deliveryStatus: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
  });
  this.searchString = '';
  this.paginateRequest();
}
  setClientName() {
    throw new Error('Method not implemented.');
  }
  setMessageType() {
    throw new Error('Method not implemented.');
  }
  setDeliveryStatus() {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  ngOnInit(): void {
  }
  toggleFilter() {
    if (this.filter) {
        this.filter = false;
    } else {
        this.filter = true;
    }
}
paginateRequest(event = this.pageEvent) {
  this.pageStart = event.pageIndex * event.pageSize + 1;
  this.pageSize = event.pageSize;
  this.pageEvent.pageSize = event.pageSize;
  if (event.pageIndex === 0) {
      this.paginator.firstPage();
  }
  let advancedFilters = {
      search: this.searchString,
  };

  this.setAppliedFilters();
  const advFiltersString = JSON.stringify(this.filterForm.value);
  const advFilters2 = JSON.parse(advFiltersString);

  advancedFilters = Object.assign(advancedFilters, advFilters2);
  
  // this.pageEvent = event; // TODO: Tinker with it
}
refreshData(event = this.pageEvent) {
  this.pageStart = event.pageIndex * event.pageSize + 1;
  this.pageSize = event.pageSize;
  if (event.pageIndex === 0) {
      this.paginator.firstPage();
  }
  
}


}
