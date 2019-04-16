import { Component, OnInit } from '@angular/core';
import { UserRoleService } from 'src/app/shared/providers/services/user-role.service';
import { Curso } from 'src/app/interfaces/curso';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'indev-programa-formacion-admin',
  templateUrl: './programa-formacion-admin.component.html',
  styleUrls: ['./programa-formacion-admin.component.scss']
})
export class ProgramaFormacionAdminComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _userRole: UserRoleService) {}

  cursos: Curso[];
  isAdmin: boolean;

  ngOnInit() {
    this.cursos = this._route.snapshot.data['cursos'] as Curso[];
    this._userRole.isAdmin.subscribe(val => (this.isAdmin = val));
  }
}
