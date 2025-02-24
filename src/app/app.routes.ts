import { Routes } from '@angular/router';
import { AddEmpolyeeComponent } from './components/add-empolyee/add-empolyee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [

    // default route
    {
        path: '',
        redirectTo : 'login',
        pathMatch : 'full'
    },

    {
        path : 'login',
        component : LoginComponent
    },

    {
        path : '',
        component : LayoutComponent,
        children : [

            {
                path: 'add-emp',
                component: AddEmpolyeeComponent
            },
        
            {
                path: 'data-binding',
                component: DataBindingComponent,
                canActivate : [authGuard]
            },
        
            {
                path: 'emp-list',
                component: EmployeeListComponent
            },
        
            {
                path: 'forms',
                component: TemplateFormComponent
            }
        
        ]
    }


];

