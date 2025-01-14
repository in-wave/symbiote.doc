import { md } from '../../../lib/index.js';

let closeBtn = /*html*/ `<div close-panel><a href="#home" close>Close [x]</a></div>`;

export default /*html*/ `
<section id="new">
  ${closeBtn}
  <section-inner>${await md('../src/~/md/new.md.js')}</section-inner>
</section>

<section id="philosophy">
  ${closeBtn}
  <section-inner clr-5>${await md('../src/~/md/philosophy.md.js')}</section-inner>
</section>

<section id="live">
  ${closeBtn}
  <section-inner clr-2>${await md('../src/~/md/live.md.js')}</section-inner>
</section>

<section id="lives">
  ${closeBtn}
  <section-inner clr-4>
    <h2>Basics</h2>
    <ul>
      <li><a href="./~/live/basic/" target="_blank">Basic example</a></li>
      <li><a href="./~/live/tag-names/" target="_blank">Tag names</a></li>
    </ul>

    <h2>Templates</h2>
    <ul>
      <li><a href="./~/live/template/" target="_blank">Manual template rendering</a></li>
      <li><a href="./~/live/template-processor/" target="_blank">Template processor (Custom styling)</a></li>
      <li><a href="./~/live/external-template/" target="_blank">External template</a></li>
    </ul>

    <h2>Context</h2>
    <ul>
      <li><a href="./~/live/data-context/" target="_blank">Shared context</a></li>
      <li><a href="./~/live/context-types/" target="_blank">Context types</a></li>
      <li><a href="./~/live/css-data/" target="_blank">CSS Data</a></li>
    </ul>

    <h2>Lists</h2>
    <ul>
      <li><a href="./~/live/dynamic-list/" target="_blank">Dynamic list rendering (Reactive table)</a></li>
      <li><a href="./~/live/list/" target="_blank">Alternative list rendering (TODO list)</a></li>
      <li><a href="./~/live/nested-list/" target="_blank">Nested lists</a></li>
      <li><a href="./~/live/custom-option/" target="_blank">Customized built-in element as a list item</a></li>
    </ul>

    <h2>Misc</h2>
    <ul>
      <li><a href="./~/live/l10n/" target="_blank">Localization</a></li>
      <li><a href="./~/live/ssr-hydration/" target="_blank">SSR + hydration</a></li>
      <li><a href="./~/live/icons/" target="_blank">Icons</a></li>
      <li><a href="./~/live/icons-2/" target="_blank">Icons 2</a></li>
      <li><a href="./~/live/wgt-routing/" target="_blank">Widget routing</a></li>
      <!-- <li><a href="./~/live/ssr-css/" target="_blank">SSR + CSS Data</a></li> -->
    </ul>
  </section-inner>
</section>

<section id="biome">
  ${closeBtn}
  <section-inner>${await md('../src/~/md/biome.md.js')}</section-inner>
</section>
`;