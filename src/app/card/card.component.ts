import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('card') card=""
  @Input('class') class=""
  @Input('color') color=""
  constructor() { }

  ngOnInit(): void {
  }

}
