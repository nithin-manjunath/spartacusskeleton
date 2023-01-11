/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UpdateProfileComponentService } from '@spartacus/user/profile/components';
import { Title } from '@spartacus/user/profile/root';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'user-form' },
})
export class UpdateProfileDetailsComponent {
  constructor(protected service: UpdateProfileComponentService) {}

  form: any = this.service.form;
  isUpdating$ = this.service.isUpdating$;
  titles$: Observable<Title[]> = this.service.titles$;

  onSubmit(): void {
    this.service.updateProfile();
  }
}
