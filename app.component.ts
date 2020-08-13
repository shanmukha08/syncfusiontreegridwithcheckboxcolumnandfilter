import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './jsontreegriddata';
import { NgModel } from '@angular/forms';
import { PageService} from '@syncfusion/ej2-angular-treegrid';
import { SwitchComponent } from '@syncfusion/ej2-angular-buttons';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [ PageService ]

})
export class AppComponent {
  public filterSettings: Object;
    public data: Object[] = [];
    @ViewChild('template1')
  public temp1: NgModel;

    ngOnInit(): void {
      this.filterSettings = { type: "Excel" }; 
        this.data = sampleData;
    }

}