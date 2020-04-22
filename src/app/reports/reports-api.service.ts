import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Report} from './reports-helper';

@Injectable({
  providedIn: 'root'
})
export class ReportsApiService {
  private apiPath = 'api/';

  constructor(
    private http: HttpClient) {
  }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiPath + 'reports');
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(this.apiPath + 'reportsTags');
  }

  getLangs(): Observable<string[]> {
    return this.http.get<string[]>(this.apiPath + 'reportsLangs');
  }
}
