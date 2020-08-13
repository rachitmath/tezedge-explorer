import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chain-baking',
  templateUrl: './chain-baking.component.html',
  styleUrls: ['./chain-baking.component.scss']
})
export class ChainBakingComponent implements OnInit {

  public chainBakingForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.chainBakingForm = this.formBuilder.group({
      mempoolParameters: ['8', Validators.required],
      maxTransaction: ['8', Validators.required],
      transactionSize: ['8', Validators.required],
      fee: ['8', Validators.required],
      maxPriority: ['8', Validators.required]
    });
  }

}
