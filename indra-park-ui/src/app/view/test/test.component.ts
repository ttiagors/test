import {Component, OnInit} from '@angular/core';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test = '';

  constructor(private service: TestService) {
  }

  ngOnInit() {
    this.service.test().subscribe(res => {
        this.test = res;
      },
      (errorMsg) => {
        console.log(errorMsg);
      });
  }

}
