import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-renda-fixa",
  template: `
    <div style="margin-bottom: 8px">
    Estamos na página da Renda Fixa
    </div>
  `,
  styles: [
    `
      * {
        font-size: 24px;
        color: blue;
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
      }
    `,
  ],
})
export class RendaFixaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
