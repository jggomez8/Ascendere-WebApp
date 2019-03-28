import { DefaultInterface } from './default';
import { firestore } from 'firebase';

export class Curso {
  public id: any;
  public name: string;
  public creator: string;
  public editor: string;
  public description: string;
  public img: string;
  public schedule: string;
  public place: string;
  public module: string;
  public addressedTo: string;

  public postulation: Postulation;
  public duration: Duration;
  public instructors: Instructor[];
  public downloadableContent: DownloadableContent[];

  private _created: firestore.Timestamp;
  private _edited: firestore.Timestamp;
  private _date: firestore.Timestamp;
  private _endDate: firestore.Timestamp;

  constructor(args) {
    this.name = args['name'];
    this.creator = args['creator'];
    this._created = args['created'];
    this.editor = args['editor'];
    this._edited = args['edited'];
    this.id = args['id'];
    this.description = args['description'];
    this.img = args['img'];
    this._date = args['date'];
    this._endDate = args['endDate'];
    this.instructors = args['instructors'];
    this.schedule = args['schedule'];
    this.place = args['place'];
    this.module = args['module'];
    this.addressedTo = args['addressedTo'];

    this.duration = new Duration(args['duration']);
    this.postulation = new Postulation(args['postulation']);

    this.instructors = [];
    args['instructors'].forEach(el => {
      this.instructors.push(new Instructor(el));
    });

    this.downloadableContent = [];
    args['downloadableContent'].forEach(el => {
      this.downloadableContent.push(new DownloadableContent(el));
    });
  }

  get hasInstructors() {
    return this.instructors.length > 0;
  }

  get hasDuration() {
    return this.duration.hours || this.duration.days || this.duration.weeks;
  }

  get type() {
    if (this.img.includes('gestion')) return 'Gestión Académica';
    if (this.img.includes('gestion-proyectos')) return 'Gestión de Proyectos';
    if (this.img.includes('identidad')) return 'Identidad UTPL';
    if (this.img.includes('pedagogia')) return 'Pedagogía';
    if (this.img.includes('investigacion')) return 'Investigación';
    if (this.img.includes('tic')) return "Tic's";
    return 'No definido';
  }
  get typeBackground() {
    if (this.img.includes('gestion'))
      return {
        'background-image': 'linear-gradient(to bottom right,#364d9d,#1ea3de)'
      };

    if (this.img.includes('gestion-proyectos'))
      return {
        'background-image': 'linear-gradient(to bottom right,#2aeeee,#2bb4e2)'
      };

    if (this.img.includes('identidad'))
      return {
        'background-image': 'linear-gradient(to bottom right,#d6332e,#f0706f)'
      };

    if (this.img.includes('pedagogia'))
      return {
        'background-image': 'linear-gradient(to bottom right,#07ccd6,#00a5c4)'
      };

    if (this.img.includes('investigacion'))
      return {
        'background-image': 'linear-gradient(to bottom right,#ffcf10,#ffbb22)'
      };

    if (this.img.includes('tic'))
      return {
        'background-image': 'linear-gradient(to bottom right,#1291c6,#44b0de)'
      };
    return {
      'background-image': 'linear-gradient(to bottom right,#364d9d,#1ea3de)'
    };
  }

  get singleDate() {
    return this._endDate === undefined && this._date !== undefined;
  }

  get startDate() {
    return new Date(this._date.seconds * 1000);
  }
  get endDate() {
    return this._endDate === undefined || this._endDate === null
      ? null
      : new Date(this._endDate.seconds * 1000);
  }

  get canPostulate() {
    const temp = new Date();
    const todayDate = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate());

    return this.postulation.date >= todayDate;
  }
}

export class DownloadableContent {
  url: string;
  constructor(args) {
    this.url = args['url'];
  }
}

export class Instructor {
  public name: string;
  public about: string;

  constructor(args) {
    this.name = args['name'];
    this.about = args['about'] ? args['about'].replace(/[{()}]/g, '') : null;
  }
}

export class Postulation {
  _date: firestore.Timestamp;
  link: string;
  message: string;
  constructor(args) {
    this._date = args['date'];
    this.link = args['link'];
    this.message = args['message'];
  }

  get date() {
    return this._date === undefined || this._date === null
      ? null
      : new Date(this._date.seconds * 1000);
  }
}

export class Duration {
  hours: number;
  days: number;
  weeks: number;

  constructor(args) {
    this.hours = args['hours'];
    this.days = args['days'];
    this.weeks = args['weeks'];
  }
}

export interface BannerCurso extends DefaultInterface {
  name: string;
  url: string;
}
