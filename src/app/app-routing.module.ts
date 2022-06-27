import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesouroDiretoComponent } from "./tesouro-direto/tesouro-direto.component";
import { RendaFixaComponent } from "./renda-fixa/renda-fixa.component";
import { TitulosPrivadosComponent } from "./titulos-privados/titulos-privados.component";


const routes: Routes = [

  {
    path: "renda-fixa",
    component: RendaFixaComponent,
  },
  {
    path: "tesouro-direto",
    component: TesouroDiretoComponent,
  },
  {
    path: "titulos-privados",
    component: TitulosPrivadosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
