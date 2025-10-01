import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private router: Router) { }


  goToGame() {
    const gamesSection = document.querySelector('.games-section');
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToCreateGame() {
    this.router.navigate(['/add-game']);
  }


}
