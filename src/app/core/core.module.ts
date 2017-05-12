import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '@core/modules/theme/theme.module';

@NgModule({
  imports: [
    ThemeModule
  ],
  providers: [
  ],
  exports: [ThemeModule]
})
export class CoreModule {
}
