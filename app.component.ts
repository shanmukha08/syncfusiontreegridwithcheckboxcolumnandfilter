import { Component, OnInit } from '@angular/core';
import { sampleData } from './jsontreegriddata';
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

    ngOnInit(): void {
      this.filterSettings = { type: "Excel" }; 
        this.data = sampleData;
    }
}
