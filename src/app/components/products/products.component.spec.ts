/* tslint:disable:no-unused-variable */
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { ApiService } from 'src/app/services/api.service';
import { ProductsComponent } from './products.component';


describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [MaterialModule, ReactiveFormsModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
      providers: [ApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set productSubscription and listData', () => {
    const apiService = fixture.debugElement.injector.get(ApiService);
    const httpCommonResponse = [{ name: 'mostafa' }];
    const spyService = spyOn(apiService, 'getProducts').and.callFake(() => {
      return of(httpCommonResponse);
    });
    component.ngOnInit();
    expect(component.listData).toBeDefined();
    expect(component.productSubscription).toBeDefined();
    component.ngOnDestroy();
  });

  it('should clear searchKey after call onSearchClear', () => {
    component.searchKey = 'mostafa';
    component.listData = new MatTableDataSource([{ name: 'mostafa' }]);
    const applyFilterSpy = spyOn(component, 'applyFilter').and.callThrough();
    component.onSearchClear();
    expect(component.searchKey).toEqual('');
    expect(applyFilterSpy).toHaveBeenCalled();
    component.ngOnDestroy();
  });

  it('should change datalist.filter after call applyFilter', () => {
    component.searchKey = 'mostafa';
    component.listData = new MatTableDataSource([{ name: 'mostafa' }]);
    component.applyFilter();
    expect(component.listData.filter).toEqual('mostafa');
    component.ngOnDestroy();
  });

});
