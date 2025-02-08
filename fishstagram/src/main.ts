import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginPageComponent } from './app/pages/login-page/login-page.component';
import { provideHttpClient } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '' },
];
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes, withEnabledBlockingInitialNavigation()), provideAnimations()],
});
