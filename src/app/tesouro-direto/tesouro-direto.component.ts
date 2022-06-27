import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tesouro-direto",
  template: `
    <div style="margin-bottom: 8px">
    Estamos na página do Tesouro Direto
    </div>
  `,
  styles: [
    `
      * {
        font-size: 24px;
        color: red;
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
      }
    `,
  ],
})
export class TesouroDiretoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
