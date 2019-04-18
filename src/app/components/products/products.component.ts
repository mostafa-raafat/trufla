import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs/internal/Subscription';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public productSubscription: Subscription;
  public listData: MatTableDataSource < any > ;
  public displayedColumns: string[] = ['id', 'title', 'thumbnailUrl'];
  public searchKey: string;

  constructor(private api: ApiService) {}

  /**
   *  Get All Products From Api.
   */
  ngOnInit() {
    this.productSubscription = this.api.getProducts().subscribe(
      list => {
        // Initialize Angular Material Data Table.
        this.listData = new MatTableDataSource(list);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

  /**
   * Clear Field And Set Filter to ''.
   */
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  /**
   * Filter Data From The Table.
   */
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  /**
   * Unsubscribe From Observables.
   */
  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

}
