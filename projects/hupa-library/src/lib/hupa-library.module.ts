import { NgModule } from '@angular/core';
import { HupaLibraryComponent } from './components/hupa-library/hupa-library.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    HupaLibraryComponent,
    PopUpComponent,
    ProductComponent,
  ],
  imports: [
  ],
  exports: [
    PopUpComponent,
    ProductComponent,
    HupaLibraryComponent,
  ]
})
export class HupaLibraryModule { }
