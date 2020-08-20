import { Routes } from '@angular/router'
import { RouterStateSnapshot, Params } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { LogsComponent } from './logs/logs.component';
import { NetworkComponent } from './network/network.component';
import { NetworkActionDetailComponent } from './network/network-action-detail/network-action-detail.component';
import { EndpointsComponent } from './endpoints/endpoints.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { StorageComponent } from './storage/storage.component';
import { StorageActionComponent } from './storage/storage-action/storage-action.component';
import { SettingsComponent } from './settings/settings.component';
import { MempoolComponent } from './mempool/mempool.component';

export const AppRouting: Routes = [

  // lazy load module
  //   { path: 'network', loadChildren: 'app/network/network.module#networkModule' },

  { path: 'monitoring', component: MonitoringComponent },

  { path: 'logs', component: LogsComponent },

  { path: 'network', component: NetworkComponent },
  { path: 'network/:address', component: NetworkComponent },

  { path: 'endpoints', component: EndpointsComponent },

  { path: 'storage', component: StorageComponent },
  { path: 'storage/:search', component: StorageActionComponent },

  { path: 'settings', component: SettingsComponent },

  { path: 'mempool', component: MempoolComponent },

  // { path: '', redirectTo: '/network', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }

];

// router interface
export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

// create custom router
export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    return { url, queryParams };
  }
}