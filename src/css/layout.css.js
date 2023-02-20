const bgPath = '../svg/bg/index.svg';

export default /*css*/ `
body {
  padding-top: 60px;
}
header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  border-radius: var(--r1);
  backdrop-filter: blur(6px);
  background-color: #fff;
  z-index: 10000;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .1);
}

header, footer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-2);
}

footer {
  text-align: center;
  padding: var(--gap-mid);
}

[logo] {
  position: relative;
  background-color: #000;
  height: 60px;
}
[logo]::before, [logo]::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 12px;
  top: 0;
  background-color: rgba(160, 160, 160, .4);
}
[logo]::before {
  left: -6px;
}
[logo]::after {
  right: -6px;
}

main {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-left: var(--gap-mid);
  padding-right: var(--gap-mid);
}
column-el {
  width: 100%;
  max-width: var(--col-w);
}

menu {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: var(--col-w);
}
menu > a {
  --l-color: var(--clr-logo-1);
  position: relative;
  display: block;
  text-decoration: none;
}
menu > a::after {
  content: '';
  position: absolute;
  height: 2px;
  width: 0;
  left: 0;
  bottom: -2px;
  background-color: var(--l-color);
  transition: .2s;
}
menu > a:hover::after, menu > a[current]::after {
  width: 100%;
}
menu > a[current]::after {
  transition: none;
}
menu > a[current] {
  pointer-events: none;
  --l-color: var(--clr-logo-2);
}

nav {
  padding: var(--gap-max);
  color: var(--clr-2);
}
nav > a {
  display: block;
  margin-bottom: var(--gap-mid);
  text-decoration: none;
}

article {
  display: block;
  padding: var(--gap-max);
  background-color: #fff;
  margin-top: var(--gap-max);
  margin-bottom: var(--gap-max);
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
}
article a {
  overflow-wrap: break-word;
}

[center] {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

p {
  margin-bottom: var(--gap-mid);
}

promo-el {
  display: flex;
  flex-wrap: wrap;
  padding-top: var(--gap-max);
}
[promo] {
  display: flex;
  flex-flow: column;
  font-size: 70px;
  font-family: 'Bebas Neue';
  line-height: 70px;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  padding-right: var(--gap-max);
  transform: translateY(6px);
}
[example] {
  flex-grow: 1;
  min-width: 380px;
  min-height: 340px;
}
[shade] {
  position: relative;
  background-color: #ccc;
  color: rgba(255, 255, 255, .6);
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;
}
[shade]:before, [shade]:after {
  position: absolute;
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  pointer-events: none;
  border: 30px solid rgba(255, 255, 255, .2);
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;
}
[shade]:after {
  border: 60px solid rgba(255, 255, 255, .2);
}
[use-bg] {
  background-color: #000;
  background-image: url(${bgPath});
  background-size: cover;
}
`;