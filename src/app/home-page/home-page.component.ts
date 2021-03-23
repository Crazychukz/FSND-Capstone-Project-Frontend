import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  colors = [
    'conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, ' +
    '#cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700)',
    'conic-gradient(from .5turn at center left, lime, cyan)',
    'conic-gradient(from 90deg at 50% 125%, #1f005c, #003298, #005ac6, #007fdc, #00a2d3, ' +
    '#00c4ae, #00e474, #00ff00, #1f005c, #003298, #005ac6, #007fdc, #00a2d3, #00c4ae, #00e474, #00ff00)',
    'conic-gradient(from .5turn at 0% 0%, #00c476, 10%, #82b0ff, 90%, #00c476)',
    'conic-gradient(at 0% 0%, snow, white)'
  ];
  constructor() {

  }

  ngOnInit() {
  }
  get bannerBG() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

}
