import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroById(id))
    ).subscribe(hero => {
      if (!hero) return this.router.navigate(['/heroes/list']);
      this.hero = hero;
      return
    })

  }

  goBack() {
    this.router.navigate(['/heroes/list']);
  }

  ordaShop( superhero: string){
    const heroName = superhero.toLowerCase();
    const baseUrl = 'https://laorda.com/busqueda?controller=search&s=';
    const searchUrl = `${baseUrl}${heroName}`;
    window.open(searchUrl,'_blank');

  }

  dcShop(superhero: string){
    const heroName = superhero.toLowerCase().replace(/ /g, "+");
    const baseUrl = 'https://www.dc.com/search?q=';
    const searchUrl = `${baseUrl}${heroName}`;
    window.open(searchUrl,'_blank');
  }

  marvelShop(superhero: string){
    const heroName = superhero.toLowerCase().replace(/ /g, "%20");
    const baseUrl = 'https://www.marvel.com/search?limit=20&query=';
    const searchUrl = `${baseUrl}${heroName}`;
    window.open(searchUrl,'_blank');
  }

  onFnac(superhero: string){
      const heroName = superhero.toLowerCase().replace(/ /g, "+");
      const baseUrl = 'https://www.fnac.es/SearchResult/ResultList.aspx?Search=';
      const searchUrl = `${baseUrl}${heroName}`;
      window.open(searchUrl,'_blank');

  }



}
