import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit{


  @Input() hero!:Hero;


  ngOnInit(): void {
    if(!this.hero) throw new Error('Hero is required');
  }

}
