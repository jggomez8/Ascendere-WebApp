import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { UserRoleService } from 'src/app/shared/providers/services/user-role.service';

@Component({
  selector: 'indev-cafe-cientifico',
  templateUrl: './cafe-cientifico.component.html',
  styleUrls: ['./cafe-cientifico.component.scss']
})
export class CafeCientificoComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _userRole: UserRoleService) {}

  encuentros: Encuentro[];
  user: firebase.User;
  isAdmin: boolean;

  /**
   * On load page should load all data to show components, also should detect weather
   * this user is admin or normal user to display admin module
   */
  ngOnInit(): void {
    this.encuentros = this._route.snapshot.data['encuentros'] as Encuentro[];

    this._userRole.isAdmin.subscribe(val => {
      this.isAdmin = val;
    });
  }

  get encuentro(): Encuentro {
    return this.encuentros[0];
  }
}
