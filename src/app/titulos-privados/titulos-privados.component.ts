import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-titulos-privados",
  template: `
    <div style="margin-bottom: 8px">
    Estamos na página do Títulos Privados
    </div>
  `,
  styles: [
    `
      * {
        font-size: 24px;
        color: green;
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
      }
    `,
  ],
})
export class TitulosPrivadosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
