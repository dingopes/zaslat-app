import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZaslatService {
  ozivData =
    'https://www.ozivdomov.cz/export/orders.csv?patternId=42&hash=984e64e12cd6648fa44940e73a08213e09b9847df1ed3b2c6234c9b573496390';

  prvniData = 'https://www.ozivdomov.cz/export/orders.csv';

  druhaData =
    '42&hash=984e64e12cd6648fa44940e73a08213e09b9847df1ed3b2c6234c9b573496390';
  constructor(private http: HttpClient) {}

  getInfo() {
    const params = new HttpParams().set('patternId', this.druhaData);

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      }),
    };
    // responseType: 'text'
    return this.http.post(this.ozivData, httpOptions);
    // return this.http.get(this.prvniData + '?' + params.toString(), {
    //   responseType: 'text',
    // });
  }
}
