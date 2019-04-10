import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellViewComponent } from './shell-view.component';
import { AuthenticatedGuard } from 'src/app/shared/providers/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: ShellViewComponent,
    children: [
      {
        path: '',
        loadChildren: '../../modules/home/home.module#HomeModule'
      },
      {
        path: 'proyectos-innovacion',
        loadChildren:
          '../../modules/proyectos-innovacion/proyectos-innovacion.module#ProyectosInnovacionModule',
        canLoad: [AuthenticatedGuard]
      },
      {
        path: 'jornadas',
        loadChildren: '../../modules/jornadas/jornadas.module#JornadasModule'
      },
      {
        path: 'desarrollo-asignatura',
        loadChildren:
          '../../modules/desarrollo-asignatura/desarrollo-asignatura.module#DesarrolloAsignaturaModule'
      },
      {
        path: 'programa-formacion',
        loadChildren:
          '../../modules/programa-formacion/programa-formacion.module#ProgramaFormacionModule'
      },
      {
        path: 'innova-tips',
        loadChildren: '../../modules/innova-tips/innova-tips.module#InnovaTipsModule'
      },
      {
        path: 'talleres-academicos',
        loadChildren:
          '../../modules/talleres-academicos/talleres-academicos.module#TalleresAcademicosModule'
      },
      {
        path: 'debate-estudiantil',
        loadChildren:
          '../../modules/debate-estudiantil/debate-estudiantil.module#DebateEstudiantilModule'
      },
      {
        path: 'cafe-cientifico',
        loadChildren: '../../modules/cafe-cientifico/cafe-cientifico.module#CafeCientificoModule'
      },
      {
        path: 'vitamina-i',
        loadChildren: '../../modules/vitamina-i/vitamina-i.module#VitaminaIModule'
      },
      {
        path: 'tips-innovacion',
        loadChildren: '../../modules/tips-innovacion/tips-innovacion.module#TipsInnovacionModule'
      },
      {
        path: 'articulo',
        loadChildren: '../../modules/articulo/articulo.module#ArticuloModule'
      },
      {
        path: 'noticias',
        loadChildren: '../../modules/noticias/noticias.module#NoticiasModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellViewRoutingModule {}
