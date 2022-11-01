import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-aves';

  constructor(private router: Router ){}

  agregar(){
    this.router.navigate(["agregar"])
  }

  editar(){
    this.router.navigate(["editar"])
  }

  consultar(){
    this.router.navigate(["consultar"])
  }
}
