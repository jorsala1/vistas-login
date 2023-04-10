import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  // para el titulo en las vistas
  title: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }


  getEmitterTitle() {
    return this.title;
  }
  emitEmitterTitle(title: string) {
    this.title.next(title);
  }

}
