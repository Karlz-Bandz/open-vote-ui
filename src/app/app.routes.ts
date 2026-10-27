import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ElectionsComponent } from './pages/elections/elections.component';
import { CreateElectionComponent } from './pages/create-election/create-election.component';
import { ElectionDetailsComponent } from './pages/election-details/election-details.component';

export const routes: Routes = [
    {
        path: 'election/new',
        component: CreateElectionComponent
    },
    {
        path: 'election/:id',
        component: ElectionDetailsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'elections',
        component: ElectionsComponent
    },
    {
        path: '',
        redirectTo: 'elections',
        pathMatch: 'full'
    }
];
