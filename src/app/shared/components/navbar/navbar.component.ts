import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild
} from '@angular/core';
import { NavbarItem } from './navbar-item';

@Component({
  selector: 'indev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  headerMenu: Array<NavbarItem> = [
    {
      name: 'Servicios',
      id: 'servicios'
    },
    {
      name: 'Innovación',
      id: 'innovacion',

      children: [
        {
          name: 'Proyectos de Innovación',
          children: [
            {
              name: 'Buenas Practicas'
            },
            {
              name: 'Proyectos Actuales'
            }
          ]
        },
        {
          id: '',
          children: [
            {
              name: 'Ayudantes de Cátedra',
              id: 'ayudante-catedra'
            },
            {
              name: 'Combinatorias',
              id: 'convocatiorias'
            }
          ]
        }
      ]
    },
    {
      name: 'Formación',
      id: 'formacion',
      children: [
        {
          name: 'Programa de Formación',
          goto: '/',
          children: [
            {
              name: 'Cursos Actuales'
            },
            {
              name: 'InnovaTips'
            }
          ]
        },
        {
          name: 'Encuentros',
          goto: '/',
          children: [
            {
              name: 'Cafe Científico'
            },
            {
              name: 'Vitamina i'
            }
          ]
        },
        {
          name: 'Jornadas De Reflection',
          goto: '/',
          children: [
            {
              name: 'Jornada 2019'
            }
          ]
        },
        {
          name: 'Diseño y desarrollo de mi asignatura',
          goto: '/',
          children: [
            {
              name: 'Como Elaborar mi Plan Docente'
            },
            {
              name: 'Repositorio de Planes Docentes'
            },
            {
              name: 'Recursos Digitales'
            },
            {
              name: 'Bases de Datos'
            },
            {
              name: 'Asesoramiento'
            }
          ]
        }
      ]
    },
    {
      name: 'Observatorio EduTendencias',
      id: 'edutendencias',
      children: [
        {
          name: 'Tips de Innovación',
          goto: '/'
        },
        {
          name: 'Noticias',
          goto: '/'
        },
        {
          name: 'Docentes Ascenderse',
          goto: '/'
        }
      ]
    }
  ];

  @ViewChildren('dropdown') dropdownElements: QueryList<ElementRef>;
  @ViewChild('mainNavbar') mainNavbarElement: ElementRef;

  // TODO: test performances after all TODO's are done
  // TODO: subscribe to router, so in router change deactivate all dropdown
  // TODO:subscribe when scroll change so deactivate all active dropdown

  ngAfterViewInit(): void {}

  /**
   * Toggle dropdowns from navbar elements
   */
  toggleDropdown(id: string) {
    // get element with id
    let clickedEl: HTMLElement;
    this.dropdownElements.forEach((el: ElementRef) => {
      if (id === (el.nativeElement as HTMLElement).id) clickedEl = el.nativeElement;
    });

    // if element has active-dropdown, remove class and return
    if (clickedEl.classList.contains('active-dropdown')) {
      clickedEl.classList.remove('active-dropdown');
      return;
    }

    // element to be activated is different from old element
    // 1. deactivate other elements, so only one is active at the moment
    this.dropdownElements.forEach((el: ElementRef) => {
      if (el.nativeElement.classList.contains('active-dropdown')) {
        el.nativeElement.classList.remove('active-dropdown');
      }
    });
    // 2 activate needed element
    clickedEl.classList.add('active-dropdown');
  }

  /**
   * toggle navbar open or close
   */
  toggleNavbar() {
    const el = this.mainNavbarElement.nativeElement as HTMLElement;

    // if element contains active, remove it, otherwise add it
    if (el.classList.contains('active-navbar')) {
      el.classList.remove('active-navbar');
      return;
    }
    el.classList.add('active-navbar');
  }
}
