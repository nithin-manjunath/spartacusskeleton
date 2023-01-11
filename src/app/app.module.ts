import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { ExtendedMiniCartModule } from './commoncomponents/extended-minicart/extended-minicart.module';
import { CustomComponentModule } from './customcomponents/custom-component/custom-component.module';
import { LayoutConfigModule } from './layout/layout-config';
import { UpdateProfileModule } from './spartacus/features/user/update-profile-details/update-profile-details.module';
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    ExtendedMiniCartModule,
    CustomComponentModule,
    UpdateProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
