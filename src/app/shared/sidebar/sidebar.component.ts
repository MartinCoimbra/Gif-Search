import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  /* el getter termina siendo la variable q leemos en el ngFor */
  get historial() {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) {}

  buscar(termino: string) {
    return this.gifsService.buscarGifs(termino);
  }
}
