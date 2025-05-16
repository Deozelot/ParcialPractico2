import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';
import {AnimeService} from "../anime.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() animeDetail!: Anime;
  animeService: AnimeService;
  route: ActivatedRoute;

  constructor(private _animeService: AnimeService, private _route: ActivatedRoute) {
    this.animeService = _animeService;
    this.route = _route;
  }

  getAnimeDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.animeService.getAnime(id).subscribe((anime: Anime) => {
        this.animeDetail = anime;
      });
    }
  }

  ngOnInit() {
    this.getAnimeDetail();
  }


}
