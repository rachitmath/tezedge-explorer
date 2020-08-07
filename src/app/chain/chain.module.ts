import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChainRoutingModule } from './chain-routing.module';
import { ChainComponent } from './chain.component';
import { ChainServerComponent } from './chain-server/chain-server.component';
import { ChainSetupComponent } from './chain-setup/chain-setup.component';
import { ChainWalletsComponent } from './chain-wallets/chain-wallets.component';
import { ChainBakingComponent } from './chain-baking/chain-baking.component';
import { ChainOtherComponent } from './chain-other/chain-other.component';
import { ChainFinishComponent } from './chain-finish/chain-finish.component';
import { EffectsModule } from '@ngrx/effects';
import { ChainEffects } from './chain.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './chain.reducers';

// Material Modules
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChainWalletEffects } from './chain-wallets/chain-wallets.effects';
import { ChainSetupEffects } from './chain-setup/chain-setup.effects';

@NgModule({
  declarations: [
    ChainComponent,
    ChainServerComponent,
    ChainSetupComponent,
    ChainWalletsComponent,
    ChainBakingComponent,
    ChainOtherComponent,
    ChainFinishComponent
  ],
  imports: [
    CommonModule,
    ChainRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    EffectsModule.forFeature([
      ChainEffects,
      ChainWalletEffects,
      ChainSetupEffects
    ]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChainModule { }
