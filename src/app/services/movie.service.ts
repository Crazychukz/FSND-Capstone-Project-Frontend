import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthService} from './auth.service';

const APIEndpoint = environment.apiServerUrl;


@Injectable()
export class MovieService {
  user: any = {};
  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}
  getHeaders() {
    return {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.auth.activeJWT()}`)
    };
  }
  newMovie(obj) {
    return this.http.post(APIEndpoint + 'movies', obj, this.getHeaders());
  }
  newActor(obj) {
    return this.http.post(APIEndpoint + 'actors', obj, this.getHeaders());
  }
  getMovies() {
    return this.http.get(APIEndpoint + 'movies', this.getHeaders() );
  }
  getActors() {
    return this.http.get(APIEndpoint + 'actors', this.getHeaders());
  }
  addCasts(id, obj) {
    return this.http.post(APIEndpoint + 'casts/' + id, obj, this.getHeaders() );
  }
  updateInstrument(obj) {
    return this.http.put(APIEndpoint + 'instrument/' + obj.id, obj );
  }
  delMovie(id) {
    return this.http.delete(APIEndpoint + 'movies/' + id, this.getHeaders() );
  }

  delActor(id) {
    return this.http.delete(APIEndpoint + 'actors/' + id, this.getHeaders() );
  }

}
