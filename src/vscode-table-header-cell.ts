import {css, CSSResultGroup, html, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {VscElement} from './includes/VscElement';

@customElement('vscode-table-header-cell')
export class VscodeTableHeaderCell extends VscElement {
  @property({reflect: true})
  role = 'columnheader';

  static get styles(): CSSResultGroup {
    return [
      super.styles,
      css`
        :host {
          box-sizing: border-box;
          display: table-cell;
          font-family: var(--vscode-font-style);
          font-size: var(--vscode-font-size);
          font-weight: bold;
          line-height: 20px;
          overflow: hidden;
          padding-bottom: 5px;
          padding-left: 10px;
          padding-right: 0;
          padding-top: 5px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .wrapper {
          box-sizing: inherit;
          overflow: inherit;
          text-overflow: inherit;
          white-space: inherit;
          width: 100%;
        }
      `,
    ];
  }

  render(): TemplateResult {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vscode-table-header-cell': VscodeTableHeaderCell;
  }
}
