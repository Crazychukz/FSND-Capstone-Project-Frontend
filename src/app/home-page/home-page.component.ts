import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { AuthService } from '../services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewChecked {
  colors = [
    'conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, ' +
    '#cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700)',
    'conic-gradient(from .5turn at center left, lime, cyan)',
    'conic-gradient(from 90deg at 50% 125%, #1f005c, #003298, #005ac6, #007fdc, #00a2d3, ' +
    '#00c4ae, #00e474, #00ff00, #1f005c, #003298, #005ac6, #007fdc, #00a2d3, #00c4ae, #00e474, #00ff00)',
    'conic-gradient(from .5turn at 0% 0%, #00c476, 10%, #82b0ff, 90%, #00c476)',
    'conic-gradient(at 0% 0%, snow, white)'
  ];
  movies: any = [];
  actors: any = [];
  loginURL: string;
  view: any;
  movieObj: any = {};
  actorObj: any = {};
  addingMovie: boolean;
  addingActor: boolean;
  activeCasts: any = [];
  newCasts: any = [];
  activeMovie: any = {};
  constructor(
    private movieService: MovieService,
    public auth: AuthService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
  ) {
    this.loginURL = auth.build_login_link('');
    this.view = 'Movies';
    // Perform required auth actions
  }

  ngOnInit() {
    this.auth.load_jwts();
    this.auth.check_token_fragment();
    this.route
      .queryParams
      .subscribe(params => {
        const uu = params['access_token'] || '';
        console.log(uu);
      });
    this.getMovies();
    this.getActors();
  }
  get bannerBG() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  getMovies() {
    if (!this.auth.can('get:movies')) {
      return;
    }
    this.movieService.getMovies().subscribe(
      data => {
        this.movies = data['movies'];
      }, error => {
        // alert('Failed to get movies');
        console.log(error);
      }
    );
  }

  getActors() {
    if (!this.auth.can('get:actors')) {
      return;
    }
    this.movieService.getActors().subscribe(
      data => {
        this.actors = data['actors'];
      }, error1 => {
        // alert('Failed to get actors');
      }
    );
  }

  getFirstLetter(obj) {
    return obj.charAt(0);
  }

  addMovie() {
    this.addingMovie = true;
    this.movieService.newMovie(this.movieObj).subscribe(
      data => {
        this.getMovies();
        document.getElementById('closeNewMovie').click();
        this.addingMovie = false;
      }, error1 => {
        this.addingMovie = false;
        alert('Failed to add new movie');
      }
    );
  }

  addActor() {
    this.addingActor = true;
    this.movieService.newActor(this.actorObj).subscribe(
      data => {
        this.getActors();
        document.getElementById('closeNewActor').click();
        this.addingActor = false;
      }, error1 => {
        this.addingActor = false;
        alert('Failed to add new actor');
      }
    );
  }

  deleteMovie(id) {
    this.movieService.delMovie(id).subscribe(
      data => {
        this.getMovies();
      }, error1 => {
      }
    );
  }
  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  toggleCasts(i) {
    if ( this.newCasts.includes(i) ) {
      this.newCasts = this.newCasts.filter(x => x !== i);
      return;
    }
    this.newCasts.push(i);
  }

  addCasts() {
    const apiObj: any = {};
    apiObj.casts = this.newCasts;
    this.movieService.addCasts(this.activeMovie.id, apiObj).subscribe(
      data => {
        this.getMovies();
        document.getElementById('closeAddMovieCasts').click();
      }, error1 => {

      }
    );
  }

  deleteActor(id) {
    this.movieService.delActor(id).subscribe(
      data => {
        this.getActors();
      }, error1 => {
      }
    );
  }
}
