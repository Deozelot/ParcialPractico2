import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() animeDetail!: Anime;
  animeService: any;
  route: any;

  constructor() { }

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
