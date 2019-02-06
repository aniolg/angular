import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  heroes: any[] = [];
  termino:string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
    ) {    }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.heroes = this._heroesService.buscarHeroe(params["term"]);
      this.termino = params["term"];
      console.log(this.heroes);
  })
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe',idx])
  }

}
