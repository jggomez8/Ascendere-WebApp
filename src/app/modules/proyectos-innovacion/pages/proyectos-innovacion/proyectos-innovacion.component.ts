import { Component, OnInit } from '@angular/core';
import { UserRoleService } from 'src/app/shared/providers/services/user-role.service';

@Component({
  selector: 'indev-proyectos-innovacion',
  templateUrl: './proyectos-innovacion.component.html',
  styleUrls: ['./proyectos-innovacion.component.scss']
})
export class ProyectosInnovacionComponent implements OnInit {
  constructor(public userRole: UserRoleService) {}

  isAdmin: boolean;

  ngOnInit() {
    this.userRole.isAdmin.subscribe(val => {
      this.isAdmin = val;
    });
  }
}
