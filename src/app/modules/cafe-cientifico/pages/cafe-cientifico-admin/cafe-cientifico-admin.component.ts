import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRoleService } from 'src/app/shared/providers/services/user-role.service';
import { Encuentro } from 'src/app/interfaces/encuentro';

@Component({
  selector: 'indev-cafe-cientifico-admin',
  templateUrl: './cafe-cientifico-admin.component.html'
})
export class CafeCientificoAdminComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _userRole: UserRoleService) {}

  encuentros: Encuentro[];
  isAdmin: boolean;

  ngOnInit(): void {
    this.encuentros = this._route.snapshot.data['encuentros'] as Encuentro[];
    this._userRole.isAdmin.subscribe(val => {
      this.isAdmin = val;
    });
  }
}
