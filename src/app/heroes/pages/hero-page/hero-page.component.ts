import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, delay } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(2000),
        switchMap( ({ id }) => this.heroesService.getHeroById( id )),
      )
      .subscribe( hero => {
      //v1 .subscribe( params => {
        //v1 console.log({params});
        if ( !hero ) return this.router.navigate([ '/heroes/list' ]);
        this.hero = hero;
        // console.log({hero});
        return;
      })
  }

  goBack():void {
    this.router.navigateByUrl('heroes/list')
  }

}
