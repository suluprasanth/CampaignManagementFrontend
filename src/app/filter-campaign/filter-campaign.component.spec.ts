import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCampaignComponent } from './filter-campaign.component';

describe('FilterCampaignComponent', () => {
  let component: FilterCampaignComponent;
  let fixture: ComponentFixture<FilterCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
