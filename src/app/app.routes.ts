import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login) },
    { path: 'admin', loadComponent: () => import('./pages/admin/admin').then(m => m.Admin), canActivate: [authGuard] },
    { path: 'what', loadComponent: () => import('./pages/what/what').then(m => m.What) },
    { path: 'who', loadComponent: () => import('./pages/who/who').then(m => m.Who) },
    { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
    { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing').then(m => m.Pricing) },
    { path: 'legal', loadComponent: () => import('./pages/legal/legal').then(m => m.Legal) },
    { path: 'privacy', loadComponent: () => import('./pages/privacy/privacy').then(m => m.Privacy) },
    { path: '**', redirectTo: '' },
];
