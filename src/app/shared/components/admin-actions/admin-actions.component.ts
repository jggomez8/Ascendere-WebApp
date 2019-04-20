import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserRoleService } from '../../providers/services/user-role.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-admin-actions',
  template: `
    <section *ngIf="isAdmin">
      <div class="container">
        <span class="TextTheme--title">Funciones de Administrador</span>

        <div class="actions">
          <ng-content select="button"></ng-content>
          <ng-content select="a"></ng-content>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      section {
        background-color: var(--primary-color);
        color: var(--on-primary);
      }
      section .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        padding-top: 20px;
        padding-bottom: 16px;
      }
      section .container span.TextTheme--title {
        margin-right: 16px;
      }
      section .container .actions {
        margin-right: -16px;
        margin-left: -16px;
      }
    `
  ]
})
export class AdminActionsComponent implements OnInit, OnDestroy {
  constructor(public userRole: UserRoleService) {}

  isAdmin: boolean;
  private _sub: Subscription;

  ngOnInit() {
    this._sub = this.userRole.isAdmin.subscribe(val => (this.isAdmin = val));
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
