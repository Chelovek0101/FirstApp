import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MafiaViewComponent } from './views/mafia/mafia.components';
import { PoliceViewComponent } from './views/police/police.components';
import { HomeViewComponent } from './views/home/home.components';

@NgModule({
  declarations: [
    HomeViewComponent, MafiaViewComponent, PoliceViewComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeViewComponent },
      { path: 'mafia', component: MafiaViewComponent },
      { path: 'police', component: PoliceViewComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
