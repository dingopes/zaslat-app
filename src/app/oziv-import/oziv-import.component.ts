import { Component, OnInit } from '@angular/core';
import { ZaslatService } from '../zaslat.service';

@Component({
  selector: 'app-oziv-import',
  templateUrl: './oziv-import.component.html',
  styleUrls: ['./oziv-import.component.scss'],
})
export class OzivImportComponent implements OnInit {
  ozivData: string[] = [];

  constructor(private zaslatService: ZaslatService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.zaslatService.getInfo().subscribe((data) => {
      console.log(data);
      // const list = data.split('\n');
      // if (!this.ozivData.length) {
      //   list.forEach((e) => {
      //     this.ozivData.push(e);
      //   });
      // }
    });
  }
}
