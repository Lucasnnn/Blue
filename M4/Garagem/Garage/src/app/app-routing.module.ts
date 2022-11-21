import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaragemResolver } from './app.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Modules/loguin/loguin.module').then((m) => m.LoguinModule),
    resolve: {
      dados: GaragemResolver,
    },
  },
  {
    path: 'listagem',
    loadChildren: () =>
      import('./Modules/listagem/listagem.module').then(
        (m) => m.ListagemModule
      ),
    resolve: {
      dados: GaragemResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
