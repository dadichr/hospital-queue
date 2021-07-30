import { Component, OnInit } from '@angular/core';
import { VisitorListService } from './visitor-list.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  public visitorList = [];

  constructor(private visitorListSrv: VisitorListService) {}

  getDataList(): void {
    this.visitorListSrv.getDataList().subscribe(
      (res: any) => {
        res.data.map((patient: any) => {
          this.visitorList.push(patient);
        });
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnInit(): void {
    this.getDataList();
  }
}
