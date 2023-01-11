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
import { CustomComponentComponent } from './custom-component.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    IconModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ImportExportOrderEntriesComponent: {
          component: CustomComponentComponent,
        },
      },
    } as CmsConfig),
  ],

  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        ImportExportOrderEntriesComponent: CustomComponentComponent,
      },
    }),
  ],

  exports: [CustomComponentComponent],
  declarations: [CustomComponentComponent],
})
export class CustomComponentModule {}
