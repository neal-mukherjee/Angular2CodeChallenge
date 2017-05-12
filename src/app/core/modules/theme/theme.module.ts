import { ThemeLoader } from './theme-loader';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Load bootstrap.js and deps
new ThemeLoader().loadTheme();

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [],
    exports: []
})
export class ThemeModule {
}
