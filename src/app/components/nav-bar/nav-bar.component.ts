import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from 'src/app/domain/ICategory';
import { FakeAuthService } from 'src/app/services/fake-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  cats: ICategory[];
  constructor(private _http: HttpClient, public authService: FakeAuthService, private router: Router) { }

  logout() {
    this.authService.currentUser = null;
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
}
