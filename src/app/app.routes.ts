import { Routes } from '@angular/router';
import { AddEmpolyeeComponent } from './components/add-empolyee/add-empolyee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';

export const routes: Routes = [
    
{
    path : 'add-emp',
    component : AddEmpolyeeComponent
},

{
    path : 'data-binding',
    component : DataBindingComponent
},

{
    path : 'emp-list',
    component : EmployeeListComponent
},

{
    path : 'forms',
    component : TemplateFormComponent 
}

];

