import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'barcode-scanning',
    loadChildren: () =>
      import('./modules/barcode-scanning/barcode-scanning.module').then(
        (m) => m.BarcodeScanningModule
      ),
  },
  {
    path: 'face-detection',
    loadChildren: () =>
      import('./modules/face-detection/face-detection.module').then(
        (m) => m.FaceDetectionModule
      ),
  },
  {
    path: 'face-mesh-detection',
    loadChildren: () =>
      import('./modules/face-mesh-detection/face-mesh-detection.module').then(
        (m) => m.FaceMeshDetectionModule
      ),
  },
  {
    path: 'selfie-segmentation',
    loadChildren: () =>
      import('./modules/selfie-segmentation/selfie-segmentation.module').then(
        (m) => m.SelfieSegmentationModule
      ),
  },
  {
    path: 'translation',
    loadChildren: () =>
      import('./modules/translation/translation.module').then(
        (m) => m.TranslationModule
      ),
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
  {
    path: 'inicio',
    loadChildren: () => import('./modules/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/menu/menu.module').then( m => m.MenuPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
