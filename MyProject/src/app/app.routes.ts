import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'activity',
        loadChildren: () => import('./activity/users.module').then(m => m.UsersModule)
    },
    {
        path: '',
        redirectTo: 'activity',
        pathMatch: 'full'
    }
];
