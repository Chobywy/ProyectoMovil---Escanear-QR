import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioAPIDjangoService } from 'src/app/service/servicio-apidjango.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public plugins = [
    {
      name: 'Barcode Scanning',
      url: '/barcode-scanning',
    },
  ];
  //---------------
  usuario: string = '';
  password: string = '';
  showLabel: boolean = true;
  showBackgroundColor: boolean = false;
  texto: string = '';

  constructor(private router: Router, private toastCtrl: ToastController,
    private apiServ: ServicioAPIDjangoService) { }

  toggleBackground(event: any) {
    this.showBackgroundColor = event.detail.checked;
  }

  async irMenu() {
    this.apiServ.autenticarUsuario(this.usuario, this.password).subscribe(
      (respuesta: any) => {
        console.log(respuesta)
        if (respuesta.autenticado) {
          const datos = {
            'nombre': respuesta.nombre,
            'correo': respuesta.correo,
            'ap_alum': respuesta.ap_alum

          }
          localStorage.setItem('datos', JSON.stringify(datos));
          console.log('Datos:', respuesta.datos);
          this.router.navigate(['/inicio.page.html']);
          this.usuario = '';
          this.password = '';
        } else {
          this.mostrarMensajeError("Usuario y contraseña incorrectos");
        }
      },
      (error) => {
        console.error('Error en la solicitud de inicio de sesión:', error);
        this.mostrarMensajeError("Ocurrió un error durante la autenticación");
      }
    );
  }
  async mostrarMensajeError(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 1500,
      position: 'middle'
    });
    toast.present();
  }

}

