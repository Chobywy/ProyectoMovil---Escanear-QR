import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router:Router) { }
  irRestablecerW(){
    this.router.navigate(['/barcode-scanning']);
  }
  irAsistenciaM(){
    this.router.navigate(['/selfie-segmentation']);
  }
  irNotificacionesM(){
    this.router.navigate(['/notificaciones']);
  }

  titulo:string="";
  correo:string="";
  apellido_alum:string="";


  ngOnInit() {
    const valores=localStorage.getItem("datos");
    if (valores!=null) {
      const datos= JSON.parse(valores)
      this.titulo=datos.nombre
      this.correo=datos.correo
      this.apellido_alum=datos.ap_alum
    }else{
      this.router.navigate(['/home']);
    }
  }

}
