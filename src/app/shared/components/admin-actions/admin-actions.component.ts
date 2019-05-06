import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserRoleService } from '../../providers/services/user-role.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-admin-actions',
  template: `
    <section *ngIf="isAdmin">
      <div class="container">
        <span class="TextTheme--title">Funciones de Administrador</span>
        <button mat-icon-button [matMenuTriggerFor]="menu">
          <mat-icon>more_vert</mat-icon>
        </button>
      </div>
      <mat-menu #menu="matMenu">
        <ng-content></ng-content>
      </mat-menu>
    </section>
  `,
  styles: [
    `
      section {
        background: rgb(32, 237, 148);
        background: linear-gradient(
          to right,
          rgba(32, 237, 148, 1) 0%,
          rgba(28, 231, 198, 1) 21%,
          rgba(0, 188, 212, 1) 90%
        );
        color: var(--on-primary);
      }
      section .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        padding-top: 16px;
        padding-bottom: 16px;
      }
      section .container span.TextTheme--title {
        margin-right: 16px;
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
