import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: ['./presentation-card.component.scss']
})
export class PresentationCardComponent {
  @Input() style: string = '';
  selectedStyle: string[] = [];

  loginStyle = [
    'stop-color:rgba(0, 0, 0, 0.8)',
    'stop-color:rgba(245, 131, 81, 0.8)',
    'stop-color:rgba(0, 0, 0, 0.2)'
  ];

  registerStyle = [
    'stop-color:rgba(244, 41, 240, 0.8)',
    'stop-color:rgba(124, 152, 221, 0.8)',
    'stop-color:rgba(0, 0, 0, 0.2)'
  ];

  ngOnInit() {
    switch (this.style) {
      case 'login':
        this.selectedStyle = this.loginStyle;
        break;
      case 'register':
        this.selectedStyle = this.registerStyle;
        break;
      default:
        this.selectedStyle = this.loginStyle;
        break;
    }
  }
}
