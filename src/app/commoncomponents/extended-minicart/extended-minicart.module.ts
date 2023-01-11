import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { ExtendedMinicartComponent } from './extended-minicart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    IconModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MiniCartComponent: {
          component: ExtendedMinicartComponent,
        },
      },
    } as CmsConfig),
  ],

  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        MiniCartComponent: ExtendedMinicartComponent,
      },
    }),
  ],

  exports: [ExtendedMinicartComponent],
  declarations: [ExtendedMinicartComponent],
})
export class ExtendedMiniCartModule {}
