import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginPageComponent } from './app/pages/login-page/login-page.component';
import { provideHttpClient } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { FeedPageComponent } from './app/pages/feed-page/feed-page.component';
import { SignupPageComponent } from './app/pages/signup-page/signup-page.component';
import { PostPageComponent } from './app/pages/post-page/post-page.component';
import { AccountPageComponent } from './app/pages/account-page/account-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'feed', component: FeedPageComponent },
  { path: 'post', component: PostPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: '**', redirectTo: '' },
];
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes, withEnabledBlockingInitialNavigation()), provideAnimations()],
});
