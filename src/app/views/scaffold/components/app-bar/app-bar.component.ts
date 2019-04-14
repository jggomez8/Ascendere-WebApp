import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { DrawerService } from '../../providers/drawer.service';
import { NavbarLinks } from '../../interfaces/navbar-item.interface';

@Component({
  selector: 'indev-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent extends NavbarLinks {
  constructor(
    public afAuth: AngularFireAuth,
    public location: Location,
    public drawerState: DrawerService
  ) {
    super();
  }

  sharePage() {
    // if (navigator.share) {
    //   navigator
    //     .share({
    //       title: 'Web Fundamentals',
    //       text: 'Check out Web Fundamentals — it rocks!',
    //       url: 'https://developers.google.com/web'
    //     })
    //     .then(() => console.log('Successful share'))
    //     .catch(error => console.log('Error sharing', error));
    // }
  }
}
