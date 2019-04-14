import { firestore } from 'firebase';

export class ProyectosInnovacion {
  proyectos: Proyecto[];

  constructor(proyectosSnap: firebase.firestore.QuerySnapshot) {
    this.proyectos = proyectosSnap.empty
      ? []
      : proyectosSnap.docs.map(doc => new Proyecto(Object.assign({ id: doc.id }, doc.data())));
  }

  get hasProjects() {
    return this.proyectos && this.proyectos.length > 0;
  }

  static projectTypes = ['buena-practica', 'proyecto-actual', 'proyecto-coordinado'];

  static projectAreas = ['administrativa', 'biologica', 'sociohumanistica', 'tecnica'];

  static validateType(projectType: string) {
    return this.projectTypes.includes(projectType);
  }

  static validateArea(projectArea: string) {
    return this.projectAreas.includes(projectArea);
  }
}

export class Proyecto {
  public id: any;
  public creator: string;
  public created: firestore.Timestamp;
  public editor: string;
  public edited: firestore.Timestamp;
  public name: string; // titulo de la propuesta
  public coordinator: string; // nombre cordinador
  public modality: string; // modalidad
  public participants: Participant[]; // participantes
  public strategicLine: string; // linea estrategica
  public type: string; // tipo de propuesta
  public periods: Period[]; // periodo
  public subject: string; // asignatura
  public img: string;
  public infografic: string;
  public videoID: string;
  public documents: Document[];
  public area: Area;

  constructor(args) {
    this.id = args['id'];
    this.creator = args['creator'];
    this.created = args['created'];
    this.editor = args['editor'];
    this.edited = args['edited'];
    this.name = args['name'];
    this.coordinator = args['coordinator'];
    this.modality = args['modality'];
    this.strategicLine = args['strategicLine'];
    this.type = args['type'];
    this.subject = args['subject'];
    this.img = args['img'];
    this.infografic = args['infografic'];
    this.videoID = args['videoID'];

    this.area = new Area(args['area']);

    this.participants = [];
    args['participants'].forEach(el => {
      this.participants.push(new Participant(el));
    });

    this.periods = [];
    args['periods'].forEach(el => {
      this.periods.push(new Period(el));
    });
    this.documents = [];
    args['documents'].forEach(el => {
      this.documents.push(new Document(el));
    });
  }

  get infograficAlt() {
    return `Infografia Proyecto: ${this.name}`;
  }

  get imgAlt() {
    return `Banner Proyecto: ${this.name}`;
  }

  get validAreas() {
    return (
      this.area.tecnica ||
      this.area.administrativa ||
      this.area.biologica ||
      this.area.sociohumanistica
    );
  }

  get hasParticipants() {
    return this.participants.length > 0;
  }

  get hasPeriods() {
    return this.periods.length > 0;
  }

  get hasDocuments() {
    return this.documents.length > 0;
  }

  get pdf() {
    for (let i = 0; i < this.documents.length; i++) {
      let doc = this.documents[i];
      if (doc.url.includes('.pdf')) return doc.url;
    }
    return null;
  }

  get videoUrl() {
    return this.videoID ? `https://www.youtube.com/embed/${this.videoID}` : null;
  }

  get participantCareers() {
    const carreers = [];
    for (let i = 0; i < this.participants.length; i++) {
      carreers.push(this.participants[i].department);
    }
    return carreers.filter(function(item, pos) {
      return carreers.indexOf(item) == pos;
    });
  }

  get nombreTipo() {
    const types = {
      'buena-practica': 'Buena Práctica',
      'proyecto-actual': 'Proyecto Actual',
      'proyecto-coordinado': 'Proyectos Coordinados'
    };
    return types[this.type];
  }

  get markdown() {
    let area = 'Area: \n';

    if (this.area.tecnica) area += '- Área Técnica \n';
    if (this.area.biologica) area += '- Área Biológica y Biomédica \n';
    if (this.area.administrativa) area += '- Área Administrativa \n';
    if (this.area.sociohumanistica) area += '- Área Sociohumanística \n';

    return `
    **Tipo Proyecto:** ${this.nombreTipo}

    ${this.coordinator ? `**Coordinador:** ${this.coordinator} ` : ''}

    ${this.modality ? `**Modalidad:** ${this.modality} ` : ''}

    ${
      this.strategicLine
        ? `**Línea estratégica que se desarrollará en la propuesta:** ${this.strategicLine} `
        : ''
    }

    ${area}
    `;
  }
}

export class Area {
  tecnica: boolean;
  administrativa: boolean;
  biologica: boolean;
  sociohumanistica: boolean;

  constructor(args) {
    this.tecnica = args['tecnica'];
    this.administrativa = args['administrativa'];
    this.biologica = args['biologica'];
    this.sociohumanistica = args['sociohumanistica'];
  }
}
export class Participant {
  name: string; // nombre
  department: string; // carrera
  subject: string; // carrera
  email: string; // carrera

  constructor(args) {
    this.name = args['name'];
    this.department = args['department'];
    this.subject = args['subject'];
    this.email = args['email'];
  }
}
export class Period {
  name: string;

  constructor(args) {
    this.name = args['name'];
  }
}
export class Document {
  url: string;

  constructor(args) {
    this.url = args['url'];
  }
}
