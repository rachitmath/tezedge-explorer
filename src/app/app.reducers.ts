import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';
// import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../environments/environment';

import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './app.routing';

// add remote error loging
//   import * as LogRocket from 'logrocket';
//   import createNgrxMiddleware from 'logrocket-ngrx';
//   const logrocketMiddleware = createNgrxMiddleware(LogRocket);

import * as fromApp from './app.reducer';
import * as fromSettings from './settings/settings.reducer';
import * as fromSettingsNode from './settings/settings-node/settings-node.reducer';

import * as fromMonitoring from './monitoring/monitoring.reducer';

import * as fromNetworkAction from './network/network-action/network-action.reducer';
import * as fromNetworkActionDetail from './network/network-action-detail/network-action-detail.reducer';
import * as fromNetworkPeers from './network/network-peers/network-peers.reducer';
import * as fromNetworkStats from './network/network-stats/network-stats.reducer';
import * as fromNetworkHistory from './network/network-history/network-history.reducer';
import * as fromNetworkEndpoint from './network/network-endpoint/network-endpoint.reducer';

import * as fromEndpointsAction from './endpoints/endpoints-action/endpoints-action.reducer';

import * as fromLogsAction from './logs/logs-action/logs-action.reducer';

import * as fromStorageBlock from './storage/storage-block/storage-block.reducer';
import * as fromStorageAction from './storage/storage-action/storage-action.reducer';
import * as fromChainWalletReducer from './chain/chain-wallets/chain-wallets.reducers';
import * as fromChainSetupReducer from './chain/chain-setup/chain-setup.reducers';

// state interface
export interface State {
    app: any;
    settings: any;
    settingsNode: any;
    monitoring: any;
    networkAction: any;
    networkActionDetail: any;
    networkPeers: any;
    networkStats: any;
    networkHistory: any;
    networkEndpoint: any;
    endpointsAction: any;
    logsAction: any;
    storageBlock: any;
    storageAction: any;
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
    chainWalletAction: any;
    chainSetupAction: any;
}

// state
export const reducers: ActionReducerMap<State> = {
    app: fromApp.reducer,
    settings: fromSettings.reducer,
    settingsNode: fromSettingsNode.reducer,
    monitoring: fromMonitoring.reducer,
    networkAction: fromNetworkAction.reducer,
    networkActionDetail: fromNetworkActionDetail.reducer,
    networkPeers: fromNetworkPeers.reducer,
    networkStats: fromNetworkStats.reducer,
    networkHistory: fromNetworkHistory.reducer,
    networkEndpoint: fromNetworkEndpoint.reducer,
    endpointsAction: fromEndpointsAction.reducer,
    logsAction: fromLogsAction.reducer,
    storageBlock: fromStorageBlock.reducer,
    storageAction: fromStorageAction.reducer,
    routerReducer: fromRouter.routerReducer,
    chainWalletAction: fromChainWalletReducer.reducer,
    chainSetupAction: fromChainSetupReducer.reducer
};

// // log all actions to console for production
// export function logger(reducer: ActionReducer<State>): any {
//     // default, no options
//     return storeLogger()(reducer);
// }

// compose all reducers to map
export const metaReducers: MetaReducer<State>[] = !environment.production
    ? []
    : [
        //    logger
    ];
