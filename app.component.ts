import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './jsontreegriddata';
import { PageService} from '@syncfusion/ej2-angular-treegrid';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [ PageService ]

})
export class AppComponent {
  public filterSettings: Object;
    public data: Object[] = [];
        @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
      this.filterSettings = { type: "Excel" }; 
        this.data = sampleData;
    }
}
