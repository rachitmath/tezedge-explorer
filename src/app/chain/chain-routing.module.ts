import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChainComponent } from './chain.component';
import { ChainServerComponent } from './chain-server/chain-server.component';
import { ChainSetupComponent } from './chain-setup/chain-setup.component';
import { ChainWalletsComponent } from './chain-wallets/chain-wallets.component';
import { ChainBakingComponent } from './chain-baking/chain-baking.component';
import { ChainOtherComponent } from './chain-other/chain-other.component';
import { ChainFinishComponent } from './chain-finish/chain-finish.component';


const routes: Routes = [
  {
    path: '',
    component: ChainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChainRoutingModule { }
