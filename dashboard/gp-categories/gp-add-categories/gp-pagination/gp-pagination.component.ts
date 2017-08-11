import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

interface IServerResponse {
  items: string[];
  total: number;
}

@Component({
  selector: 'app-gp-pagination',
  templateUrl: './gp-pagination.component.html',
  styleUrls: ['./gp-pagination.component.css']
})
export class GpPaginationComponent implements OnInit {

  @Input() cats = [];

  asyncCats: Observable<string[]>;
  p: number = 1;
  total: number;
  loading: boolean;

  constructor() {
    console.log(this.cats);
    this.cats.push('hello');
  }

  ngOnInit() {
    console.log(this.cats);
    this.getPage(1);

  }

  getPage(page: number) {

    //this.cats.push({ "_id": "598587b53a08c30b62537c9b", "gpCatName": "Best Solution for Web Development", "gpCatSlug": "best-solution-for-web-development", "__v": 0 }, { "_id": "598599783a08c30b62537c9c", "gpCatName": "Hello", "gpCatSlug": "hello", "__v": 0 }, { "_id": "5985a09e3a08c30b62537c9d", "gpCatName": "sdfsfsdf", "gpCatSlug": "sdfsfsdf", "__v": 0 }, { "_id": "5985a0a03a08c30b62537c9e", "gpCatName": "sdfsfsdfdfgdf", "gpCatSlug": "sdfsfsdfdfgdf", "__v": 0 }, { "_id": "5985a0a33a08c30b62537c9f", "gpCatName": "sdfsfsdfdfgdfsdf", "gpCatSlug": "sdfsfsdfdfgdfsdf", "__v": 0 }, { "_id": "5985a0a63a08c30b62537ca0", "gpCatName": "dfgfdsdfsfsdfdfgdfsdf", "gpCatSlug": "dfgfdsdfsfsdfdfgdfsdf", "__v": 0 }, { "_id": "5985a0a83a08c30b62537ca1", "gpCatName": "xcv", "gpCatSlug": "xcv", "__v": 0 }, { "_id": "5985a0aa3a08c30b62537ca2", "gpCatName": "xcvdfg", "gpCatSlug": "xcvdfg", "__v": 0 }, { "_id": "5985a0ad3a08c30b62537ca3", "gpCatName": "sd234234xcvdfg", "gpCatSlug": "sd234234xcvdfg", "__v": 0 }, { "_id": "5985a0b43a08c30b62537ca6", "gpCatName": "sd234234xcvdfgfg", "gpCatSlug": "sd234234xcvdfgfg", "__v": 0 }, { "_id": "5985a0bd3a08c30b62537ca7", "gpCatName": "343224", "gpCatSlug": "343224", "__v": 0 }, { "_id": "5985a4033a08c30b62537ca8", "gpCatName": "dsfsd", "gpCatSlug": "dsfsd", "__v": 0 }, { "_id": "5985a4133a08c30b62537ca9", "gpCatName": "dsfsd7668567", "gpCatSlug": "dsfsd7668567", "__v": 0 })

    this.loading = true;
    this.asyncCats = serverCall(this.cats, page)
      .do(res => {
        this.total = res.total;
        this.p = page;
        this.loading = false;
      })
      .map(res => res.items);
  }
}

/**
 * Simulate an async HTTP call with a delayed observable.
 */
function serverCall(cats: string[], page: number): Observable<IServerResponse> {
  const perPage = 10;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const total = cats.length;

  return Observable
    .of({
      items: cats.slice(start, end),
      total: (total) ? total : 30
    }).delay(1000);
}
