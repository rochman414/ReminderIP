import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reminder2';

  constructor(private spinner: NgxSpinnerService) {}

  onInit(): void{
    this.spinner.show();

    setTimeout(()=> {
      this.spinner.hide()
    }, 2000);
  }
}
