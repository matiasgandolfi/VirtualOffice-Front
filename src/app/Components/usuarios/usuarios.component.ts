import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Services/usuario.service';
import { UsuarioDTO } from '../../Models/UsuarioDTO';
import { UsuarioModel } from 'src/app/Models/UsuarioModel';
import { NgForm } from '@angular/forms'; // Asegúrate de importar NgForm si estás usando formularios reactivos

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioDTO[] = [];

  usuario: UsuarioModel = new UsuarioModel(0, '', '', '', '', null);

  constructor(private usuarioService: UsuarioService) { }

  onSubmit(usuarioForm: NgForm) {
    if (usuarioForm.invalid) {
      return;
    }

    this.usuarioService.postUsuario(this.usuario).subscribe(
      (response) => {
        // Procesa la respuesta del servidor (puede ser una confirmación de creación)
        console.log('Usuario creado exitosamente', response);
        // Puedes limpiar el formulario después de una creación exitosa si es necesario
        usuarioForm.resetForm();
      },
      (error) => {
        // Maneja cualquier error que ocurra durante la creación
        console.error('Error al crear usuario', error);
      }
    );
  }


  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.usuarioService.getUsuarios().subscribe((data: UsuarioDTO[]) => {
      this.usuarios = data;
    });
  }
}
