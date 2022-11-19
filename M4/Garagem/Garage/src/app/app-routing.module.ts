import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Modules/loguin/loguin.module').then((m) => m.LoguinModule),
  },
  {
    path: 'listagem',
    loadChildren: () =>
      import('./Modules/listagem/listagem.module').then(
        (m) => m.ListagemModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
