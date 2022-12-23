import { Subject } from "rxjs";

export class LibrosService {
  librosSubject = new Subject();
  private libros = ['PHP', 'GO', 'Node JS'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next({static: false});
  }

  eliminarLibro(libroNombre: string) {
    this.libros = this.libros.filter(x=>x !== libroNombre);
    this.librosSubject.next({static: false});
  }

  obtenerLibros() {
    return [...this.libros];
  }
}
