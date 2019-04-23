import { Component } from '@angular/core';

@Component({
  selector: 'indev-proyectos-innovacion',
  template: `
    <indev-admin-actions>
      <a [routerLink]="['/proyectos-innovacion/admin/create']" mat-menu-item>Crear Proyecto</a>
    </indev-admin-actions>

    <indev-header>
      <h2>Docentes <span class="TextTheme--ascendere">Ascendere</span></h2>
      <h1>Proyectos de Innovación Docente</h1>
      <img src="/assets/images/ProyectosInnovacion.svg" alt="ProyectosInnovacion Icon" />
      <markdown src="/assets/markdown/proyectos-innovacion/proyectos-innovacion.md"> </markdown>
    </indev-header>

    <indev-convocatoria></indev-convocatoria>

    <section indev-section class="container">
      <indev-section-title>
        Proyectos de Innovacion Docente
      </indev-section-title>
      <indev-section-controls>
        <a
          mat-button
          color="primary"
          [routerLink]="['/', 'proyectos-innovacion', 'proyectos']"
          [queryParams]="{ type: 'buena-practica' }"
          >Buenas Practicas</a
        >
        <a
          mat-button
          color="primary"
          [routerLink]="['/', 'proyectos-innovacion', 'proyectos']"
          [queryParams]="{ type: 'proyecto-actual' }"
          >Proyectos Actuales</a
        >
        <a
          mat-button
          color="primary"
          [routerLink]="['/', 'proyectos-innovacion', 'proyectos']"
          [queryParams]="{ type: 'proyecto-coordinado' }"
          >Proyectos Coordinados</a
        >
      </indev-section-controls>
    </section>
  `
})
export class ProyectosInnovacionComponent {}
