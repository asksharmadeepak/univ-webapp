import {HttpClient} from "@angular/common/http";
/**
 * Created by dsm2061 on 8/16/18.
 */

export class UniversityDetailsService{

  constructor(private http: HttpClient, private _configService: ConfigService) {}

  private universityDetailUrl = "http://localhost:8080";

  getUniversityDetails(): Promise<any>{
    return this.http
      .request(`${this.universityDetailUrl}` + '/details')
      .toPromise()
      .catch(this.handleError);
  }

}

