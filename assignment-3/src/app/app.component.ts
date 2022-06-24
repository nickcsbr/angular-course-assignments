import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleContent = true;
  buttonLog = [];
  index = 1;

  onButtonClick() {
    this.toggleContent = !this.toggleContent;
    this.buttonLog.push(this.index + ": Button clicked, toggle now is " + (this.toggleContent === true ? 'enabled' : 'disabled'));
    this.index++;
  }

  getColor(position) {
    console.log(position)
    return position >= 5 ? 'blue' : 'transparent';
  }
}
