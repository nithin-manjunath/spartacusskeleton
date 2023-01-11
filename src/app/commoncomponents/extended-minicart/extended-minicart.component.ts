import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';
import { MiniCartComponent } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mini-ekcart',
  templateUrl: './extended-minicart.component.html',
  styleUrls: ['./extended-minicart.component.scss'],
})
export class ExtendedMinicartComponent
  extends MiniCartComponent
  implements OnInit
{
  constructor(
    protected activeCartService: ActiveCartService,
    public cdf: ChangeDetectorRef
  ) {
    super(activeCartService);
  }
  totalCartQty: any;
  ngOnInit(): void {
    this.activeCartService.getActive().subscribe((cart) => {
      if (cart) {
        this.totalCartQty = cart.totalItems;
      }
      this.cdf.detectChanges();
    });
  }
}
