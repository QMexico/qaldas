import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';
import { ArticlePage } from './pages/article-page/article-page';
import { HomePage } from './pages/home-page/home-page';
import { MembersPage } from './pages/members-page/members-page';
import { QaldasPage } from './pages/qaldas-page/qaldas-page';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'article',
    component: ArticlePage,
  },
  {
    path: 'home',
    component: QaldasPage
  },
  {
    path: 'members',
    component: MembersPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '*',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
