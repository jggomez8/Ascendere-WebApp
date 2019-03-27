import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indev-jornada-formacion',
  template: `
    <markdown ngPreserveWhitespaces>
      ## Jornadas de Reflexión

      Consolidadas como instancias de diálogo, análisis y reflexión, las
      Jornadas de Reflexión son encuentros centrados en temas en los que se conjugan ciencia y
      filosofía institucional, están dirigidos al personal docente y administrativo, contando con
      una parte académica y otra humanística.

      En lo que tiene que ver a las Jornadas Académicas, se
      generan espacios durante cada ciclo académico, donde los docentes de todas las áreas hacen una
      reflexión académica para mejorar procesos y elaborar propuestas que optimicen la educación.
      Bajo la dirección del Vicerrectorado Académico en un trabajo compartido con los otros
      Vicerrectorados y Direcciones Generales que forman parte de la universidad, los participantes
      comparten valiosas experiencias, exponen temas relacionados con innovaciones aplicadas en sus
      materias, ensayos, investigaciones aplicadas, reflexiones sobre su profesión y herramientas
      pedagógicas. Además estos encuentros son aprovechados para difundir información académica
      actual y de interés a la comunidad docente de la institución.
    </markdown>
  `
})
export class JornadaFormacionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
