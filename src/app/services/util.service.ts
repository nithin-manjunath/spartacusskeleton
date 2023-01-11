import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UtilService {
  $orderDetailsResponse = new BehaviorSubject<any>(null);
  userId: string | undefined;
  constructor(
    private httpClient: HttpClient,
    private occService: OccEndpointsService,
    private userAccount: UserAccountFacade
  ) {}

  getOrderDetails(orderID: string): Observable<any> {
    return this.userAccount
      .get()
      .pipe(
        mergeMap((user: any) =>
          user !== undefined
            ? this.httpClient.get<any>(
                this.occService.buildUrl(
                  `/users/${user?.uid}/orders/${orderID}?fields=FULL`
                )
              )
            : of({})
        )
      );
  }
}
