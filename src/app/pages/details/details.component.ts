import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id = '';
  dataNameStr = '';
  inData: Observable<any> | null = null;

  constructor(private route: ActivatedRoute, private service: FirebaseService<any>, private location: Location) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.dataNameStr = params.dataNameStr;
      this.getItem();
    }
    console.log(this.id, this.dataNameStr);
  }

  getItem(): void {
    this.inData = this.service.getById(this.dataNameStr + 's', this.id);
  }

  close(): void {
    this.location.back();
  }
}