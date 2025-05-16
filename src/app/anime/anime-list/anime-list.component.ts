import {Component, OnInit} from '@angular/core';
import {Anime} from '../anime';
import {AnimeService} from '../anime.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  averageRating!: number;
  constructor(private animeService: AnimeService, private router: Router) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  getAverangeRating(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      let sum = 0;
      animes.forEach(anime => {
        sum += Number.parseInt(anime.Rating)
      })
      this.averageRating = sum/this.animes.length;
    });
  }

  onSelected(anime: Anime): void {
    this.router.navigate(['/animes', anime.id])
  }

  ngOnInit() {
    this.getAnimes();
    this.getAverangeRating();
  }

}
