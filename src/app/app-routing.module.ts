import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';

export const appRoutes: Routes = [
  { path: 'addContact', 
    component: AddUserComponent 
  },
  // {
  //   path: 'edit/:id',
  //   component: EditComponent
  // },
  { path: 'contactList',
    component: UserListComponent
  },

  { path: '', redirectTo :'contactList' , pathMatch : "full"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
