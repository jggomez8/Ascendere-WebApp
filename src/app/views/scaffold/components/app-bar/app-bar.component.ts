import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarItem } from '../../interfaces/navbar-item.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit, OnDestroy {
  constructor(private _location: Location, private _afAuth: AngularFireAuth) {}

  public user: firebase.User;
  private _userSub: Subscription;

  ngOnInit() {
    // Subscribe to current user state, instead of awaiting for first result since
    // user can log out and state will never be updated
    this._userSub = this._afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this._userSub.unsubscribe();
  }

  navigateBack() {
    this._location.back();
  }

  sharePage() {
    if (navigator.share) {
      navigator
        .share({
          title: 'Web Fundamentals',
          text: 'Check out Web Fundamentals — it rocks!',
          url: 'https://developers.google.com/web'
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing', error));
    }
  }

  /**
   * Call `Sign out` method om afAuth service for a correct logOut, and clean user data.
   * Also update this component user
   */
  signOut() {
    this._afAuth.auth.signOut();
  }

  headerMenu: Array<NavbarItem> = [
    {
      name: 'Servicios',
      routerLink: ['/', 'ascendere']
    },
    {
      name: 'Innovación',
      children: [
        {
          name: 'Proyectos de Innovación',
          routerLink: ['/', 'proyectos-innovacion'],
          children: [
            {
              name: 'Buenas Practicas',
              routerLink: ['/', 'proyectos-innovacion', 'proyectos'],
              queryParams: { type: 'buena-practica' }
            },
            {
              name: 'Proyectos Actuales',
              routerLink: ['/', 'proyectos-innovacion', 'proyectos'],
              queryParams: { type: 'proyecto-actual' }
            },
            {
              name: 'Proyectos Coordinados',
              routerLink: ['/', 'proyectos-innovacion', 'proyectos'],
              queryParams: { type: 'proyecto-coordinado' }
            }
          ]
        },
        {
          children: [
            {
              name: 'Ayudantes de Cátedra',
              routerLink: ['/', 'articulo', 'ayudantes-de-catedra']
            },
            {
              name: 'Proyecto Mentores',
              routerLink: ['/', 'articulo', 'proyecto-mentores']
            },
            {
              name: 'Retos',
              goto: 'https://retos.utpl.edu.ec/'
            }
          ]
        }
      ]
    },
    {
      name: 'Formación',
      children: [
        {
          name: 'Formación Docente',
          children: [
            {
              name: 'Cafe Científico',
              routerLink: ['/', 'cafe-cientifico']
            },
            {
              name: 'Debate Estudiantil',
              routerLink: ['/', 'debate-estudiantil']
            },
            {
              name: 'InnovaTips',
              routerLink: ['/', 'innova-tips']
            },
            {
              name: 'Programa de Formación',
              routerLink: ['/', 'programa-formacion']
            },
            {
              name: 'Talleres Académicos',
              routerLink: ['/', 'talleres-academicos']
            },
            {
              name: 'Vitamina I',
              routerLink: ['/', 'vitamina-i']
            }
          ]
        },
        {
          name: 'Jornadas De Reflection Académica',
          children: [
            {
              name: 'Jornada Actual',
              routerLink: ['/', 'jornadas']
            },
            {
              name: 'Portafolio de Jornadas',
              routerLink: ['/', 'jornadas', 'portafolio']
            }
          ]
        },
        {
          name: 'Desarrollo de mi asignatura',
          routerLink: ['/', 'desarrollo-asignatura'],
          children: [
            {
              name: 'Como Elaborar mi Plan Docente',
              routerLink: ['/', 'articulo', 'plan-docente']
            },
            {
              name: 'Repositorio de Planes Docentes',
              routerLink: ['/', 'articulo', 'repositorio-plan-docente']
            },
            {
              name: 'Recursos Digitales',
              routerLink: ['/', 'articulo', 'recursos-digitales-aplicados']
            },
            {
              name: 'Bases de Datos',
              goto: 'https://biblioteca.utpl.edu.ec/'
            },
            {
              name: 'Asesoramiento',
              routerLink: ['/', 'articulo', 'asesoramiento-pedagogico']
            }
          ]
        }
      ]
    },
    {
      name: 'Observatorio Edutendencias',
      children: [
        {
          name: 'Tips de Innovación',
          routerLink: ['/', 'tips-innovacion'],
          children: [
            {
              name: 'Aula Divertida',
              routerLink: ['/', 'tips-innovacion', 'aula-divertida']
            },
            {
              name: 'Docentes del Futuro',
              routerLink: ['/', 'tips-innovacion', 'docentes-futuro']
            },
            {
              name: 'Podcast',
              goto: 'https://www.ivoox.com/podcast-academia-utpl_sq_f1507318_1.html'
            },
            {
              name: 'Videos',
              routerLink: ['/', 'tips-innovacion', 'videos']
            }
          ]
        },
        {
          name: 'Noticias',
          routerLink: ['/', 'noticias']
        },

        {
          name: 'Docentes Ascenderes',
          goto: 'https://www.youtube.com/channel/UCzRd2Y87-NJnVliV8B6e_Xg'
        }
      ]
    }
  ];
}
