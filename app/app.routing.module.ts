import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LibraryCardV2ViewComponent } from './cards/librarycard-v2/librarycard-v2.component';
import { LibraryCardViewComponent } from './cards/librarycard/librarycard.component';
import { GroupsViewComponent } from './cards/groups/groups.component';

@NgModule({
  declarations: [ 
    LibraryCardV2ViewComponent, LibraryCardViewComponent, GroupsViewComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'librarycard-v2', component: LibraryCardV2ViewComponent },
      { path: 'librarycard', component: LibraryCardViewComponent },
      { path: 'groups', component: GroupsViewComponent },
      { path: '**', redirectTo: 'groups' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


