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
        background: #36a6bf;
        background: linear-gradient(259deg, #36a6bf 0%, #4ecbd9 30%, #37a4ce 100%);
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
