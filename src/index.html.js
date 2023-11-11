import head from './2x/tpl/head.htm.js';

import sections from './2x/home/sections.js';

export default /*html*/ `
<!DOCTYPE html>
<html lang="en">
${head()}
<body>
  <card-el clr-1>
    <img src="./svg/logo/index.svg" alt="Symbiote.js">
  </card-el>

  <a href="#new">
    <card-el triple>
      <div>
        <h2>Symbiote.js 2.0 is out now!</h2>
        <h3>What's new?</h3>
      </div>
    </card-el>
  </a>

  <a href="./2x/docs/installation.html">
    <card-el clr-2>Docs</card-el>
  </a>

  <a href="#philosophy">
    <card-el clr-5>Philosophy</card-el>
  </a>
  
  <a href="#live">
    <card-el double>Live example</card-el>
  </a>
  
  <a href="./2x/cookbook/">
    <card-el clr-4>Cookbook</card-el>
  </a>

  <a href="#biome">
    <card-el>Biome</card-el>
  </a>

  <a href="#community">
    <card-el>Community</card-el>
  </a>

  <a href="#sponsorship">
    <card-el double clr-3>Sponsorship</card-el>
  </a>

  <a href="#solution">
    <card-el triple>Request solution</card-el>
  </a>

  <a href="./1x/" target="_blank">
    <card-el>Go to 1.x →</card-el>
  </a>

  <a href="https://github.com/symbiotejs/symbiote.js" target="_blank">
    <card-el clr-2>GitHub →</card-el>
  </a>

  ${sections}
</body>
</html>`;
