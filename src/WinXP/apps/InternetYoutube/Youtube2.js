import React, { useState } from 'react';
import styled from 'styled-components';
import footer1 from 'assets/youtube/footer1.png';
import footer2 from 'assets/youtube/footer2.png';
import lupa from 'assets/youtube/lupa.png';
import logo from 'assets/youtube/logo.png';



const Youtube = () => {
    const [state, setState] = useState({
        route: 'main',
        query: '',
      });

    return(
    <div className="ie__content__inner">
        <Page>
		<html lang="en">
  <head>
    <title>Youtube</title>
    <link rel="stylesheet" href="./styles/css-reset.css" />
    <link rel="stylesheet" href="./styles/style.css" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="icon"
      href="https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico"
      type="image/x-icon"
    />
  </head>
  <body>
    <nav id="nav-container">
      <div id="left-nav-item">
        <div id="burger-box">
          <span class="burger-stripe"></span>
          <span class="burger-stripe"></span>
          <span class="burger-stripe"></span>
        </div>
        <div class="logo">
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
          <span>YouTube</span>
        </div>
      </div>

      <div id="search-box" class="opacity6">
        <label for="search-input" class="hidden-item">buscar</label>
        <input
          type="text"
          placeholder="Search"
          id="search-input"
          title="Search"
        />
        <button id="search-button" type="button">
          <i class="fa fa-search opacity6"></i>
        </button>
      </div>

      <div id="right-nav-item">
        <div id="video">
          <i class="fa fa-video-camera" aria-hidden="true"></i>
          <span>+</span>
        </div>
        <i class="fa fa-th" aria-hidden="true"></i>
        <i class="fa fa-bell"></i>
      </div>
    </nav>
    <main>
      <section id="main">
        <h2 class="hidden-item">hidden for semantic purpose</h2>
        <section id="video-section">
          <h2 class="hidden-item">hidden for semantic purpose</h2>
          <iframe
            src="https://www.youtube.com/embed/SUN8HgQ1sdQ?si=gZJkk4dUc8qQAA3t"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
        <section id="video-title">
          <h2 class="hidden-item">hidden for semantic purpose</h2>
          <h3 id="video-name">
		  Sistema de Pós-vendas para concessionárias	
          </h3>
          <div id="video-stats">
            <div id="published-by">
              <img
                id="publisher-image"
                alt="The Odin Project"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgUCCAMNAwMEAwkEBQgFBQQQBQoHBxAIDAYMDAsKCwoNDhIQDQ4RDgsLEBYJERMUFQwVCA8XGBYUDhELDAoBAwQEBgUGCgYGCBQNCwsUExQODhANFBANFA0NFBAODRQJCxMJDRAUCw4LFAoLFA0UFBQNCAgICAgIDgkICAgICP/AABEIADAAMAMBEQACEQEDEQH/xAAaAAEAAwADAAAAAAAAAAAAAAAABAUHAQIG/8QAKhAAAQMDAQcDBQAAAAAAAAAAAQACAwQFEQYHEhMUITFBMjV0CFFhcbP/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAgUDBAYHAf/EACkRAAEDAQUHBQAAAAAAAAAAAAABAgMEBREhMZETMzRScZLREiJDUcH/2gAMAwEAAhEDEQA/AJC8POMCAIAgCAIAgCAu4dD3WoDDFp+6Ste0OY8UUhaQR0IO71H5WylNMqXpGvavgybN/Kuhy/Ql2iDi/T11YGjJdyUoGPv6UWlmT417V8DZv5V0KNaxjCAIAgNu2L7Zb/X1+lYKi/TyQOqIqY03DYBwwMBud3PYDyuls20al08cSye29Euwy0LGnqJFe1quwJW2/bPf7HctSw0N+np4Y5eEyn4cZG6YRkZLc+T58qdp2jUx1EkbZLm/WGWhKoqJGyOajsDB1y5WBAEAQHuthfvGk/nsVpZfFx9TZpt63qSvqE961T8kfxap2txcnX8QlVb1xnaqDUCAIAgJ9ivlRpqaklts3LS0kglhl3Guw4djhwIP6IWWKV0T0exblTIm1ytX1Jmh21DqGp1VNVS3So5qWqdvzTbjWZOAPS0ADoB2C+zSvmesj1vVc1DnK9fU7NSuWEgEAQBAEAQBAEB//9k="
              />
              <div id="publisher-name">
                <span>Atria</span>
                <div id="subscribe-section">
                  <div id="subscribe-button">
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    Subscribe
                  </div>
                  <span class="total-subscription light-text">
                    999
                  </span>
                </div>
              </div>
            </div>
            <span id="views" class="light-text">
              57.809 visualizações
            </span>
          </div>
          <span class="thin-separator"></span>
          <section id="social-icons">
            <h2 class="hidden-item">hidden for semantic purpose</h2>
            <div id="social-section-left" class="light-text">
              <button type="button" class="icon-button">
                <i class="fa fa-plus" aria-hidden="true"></i>
                Add To
              </button>
              <button type="button" class="icon-button">
                <i class="fa fa-share" aria-hidden="true"></i>
                Share
              </button>
              <button type="button" class="icon-button">
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                More
              </button>
            </div>
            <div id="social-section-right" class="light-text">
              <button type="button" class="icon-button">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                359
              </button>
              <button type="button" class="icon-button">
                <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                14
              </button>
            </div>
          </section>
        </section>
        <section id="video-description">
          <h4>Publicado em 17, Feb de 2024</h4>
          <p>
		  Sistema de Pós-vendas para concessionárias

Criamos toda uma logística para automatizar, gerenciar e acelerar o atendimento ao cliente. Com o Sistema Acampa, nossos clientes tem uma visão mais completa, organizada e detalhada sobre o negócio.

O projeto tem como objetivo aumentar o faturamento melhorando o atendimento e garantindo a melhor tecnologia de gerenciamento para o pós venda.
          </p>
          <span class="thin-separator"></span>
          <span class="align-center light-text">VER MAIS</span>
        </section>
      </section>

      <aside>
        <header id="sidebar-header">
          <strong>Proximo</strong>
          <div>
            <span class="light-text">Autoplay</span>
            <i class="fa fa-info-circle light-text" aria-hidden="true"></i>
            <i class="fa fa-toggle-on" aria-hidden="true"></i>
          </div>
        </header>

        <section class="video-preview-content">
          <img
            src="https://i.ytimg.com/vi/T4unNrKogSA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCj3-4OD_TIbNSeyjOs_RKjdJ2ow"
            alt=""
          />
          <div class="details">
            <h3 class="video-title">

            WebSocket // Dicionário do Programador
                      </h3>

            <div class="video-preview-footer">
              <p class="preview-user">Código Fonte</p>
              <span class="preview-views">68 mil visualizações </span>
            </div>
          </div>
        </section>

        <span class="thin-separator"></span>
        <section class="video-preview-content">
          <img
            src="https://i.ytimg.com/vi/R8gujLWDwwo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUBw043nsAvk9189mG-fRJR8R02Q"
            alt=""
          />
          <div class="details">
            <h3 class="video-title">
			Como implementar níveis de acesso em um sistema Laravel — Laravel 10.
            </h3>

            <div class="video-preview-footer">
              <p class="preview-user">pinguim do laravel</p>
              <span class="preview-views"> 2.352 visualizações</span>
            </div>
          </div>
        </section>
        <section class="video-preview-content">
          <img
            src="https://i.ytimg.com/vi/l2y8oYqNV8I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1cdRLyz6QNk79rfKiLWZJv3OtSg"
            alt=""
          />
          <div class="details">
            <h3 class="video-title">
			Nuxt.js (O Melhor Companheiro do Vue.js)
            </h3>
            <div class="video-preview-footer">
              <p class="preview-user">Código Fonte</p>
              <span class="preview-views">24 mil visualizações </span>
            </div>
          </div>
        </section>
        <section class="video-preview-content">
          <img
            src="https://i.ytimg.com/vi/gyMwXuJrbJQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbgec_msJz3LmLi8SBwOpesAPpzQ"
            alt=""
          />
          <div class="details">
            <h3 class="video-title">Learn Blockchain, Solidity, and Full Stack Web3 Development with JavaScript – 32-Hour Course</h3>
            <div class="video-preview-footer">
              <p class="preview-user">freeCodeCamp.org</p>
              <span class="preview-views">2,5 mi de visualizações</span>
            </div>
          </div>
        </section>
        <span class="thin-separator"></span>
        <a href="#" id="show-more-button" class="align-center light-text">
          VER MAIS
        </a>
      </aside>
    </main>
    <footer>
      <div class="footer-top-wrapper">
        <div class="logo">
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
          <span>YouTube</span>
        </div>
        <div class="top-item language">
          <i class="fa fa-user"></i>
          <span>Linguagem:</span>
          <span><strong>Português</strong></span>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <div class=" top-item location">
          <span>Localização:</span>
          <span><strong>Brasil</strong></span>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <div class="top-item mode">
          <span>Modo restrito:</span>
          <span><strong>desligado</strong></span>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <div class="top-item history">
          <i class="fa fa-hourglass-end"></i>
          <span>Historico</span>
        </div>
        <div class="top-item help">
          <i class="fa fa-question-circle"></i>
          <span>Ajuda</span>
        </div>
      </div>
      <div class="footer-bottom-wrapper">
        <div id="bottom-top">
          <a href="#" target="blank">About</a>
          <a href="#">Press</a>
          <a href="#">Copyright</a>
          <a href="#">Creators</a>
          <a href="#">Advertise</a>
          <a href="#">Developers</a>
        </div>
        <div id="bottom-bottom">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Policy & Safety</a>
          <a href="#" id="bottom-last">Test new features</a>
        </div>
      </div>
    </footer>
  </body>
</html>

        </Page>
    </div> 
    );
};

const Page = styled.div`
/* HEADER SECTION START */

nav#nav-container {
  display: flex;
  height: 30px;
  padding: 15px 0 15px 0;
  background: #fff;
}

#left-nav-item {
  display: flex;
  align-items: center;
  width: 15vw;
  justify-content: space-around;
}

#burger-box {
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  align-items: flex-start;
}

.burger-stripe {
  border: 1px solid gray;
  height: 1px;
  margin: 3px 0 0 0;
  width: 20px;
  background: grey;
}

#right-nav-item {
  align-items: center;
  display: flex;
  font-size: 17px;
  justify-content: flex-end;
  margin-right: 2em;
  width: 15vw;
  color: #606060;
}

#search-box {
  display: flex;
  width: 70vw;
  justify-content: center;
  align-items:center;
}

#search-button {
  font-size: 1em;
  width: 70px;
  height:25px;
}

.logo {
  font-size: 25px;
  margin-right: 15px;
  display: flex;
}

.logo span {
  font-weight: bolder;
  letter-spacing: -1px;
}

#right-nav-item i {
  margin: 0 1em;
}

#search-input {
  width: 500px;
  font-size: 1em;
  padding-left: 10px;
  height:25px;
}

#user-avator {
  width: 35px;
  border-radius: 180%;
}

#video {
  position: relative;
}

#video i {
  font-size: 20px;
}

#video span {
  position: absolute;
  left: 23px;
  color: #fff;
  font-size: 15px;
  top: 2px;
  font-weight: 800;
}

/* HEADER SECTION END */

/* MAIN SECTION CONTAINER */

main {
  display: flex;
}

header#sidebar-header {
  display: flex;
  justify-content: space-between;
  padding: 1em;
}

.fa-toggle-on {
  color: #167ac6;
}

/* MAIN SECTION CONTAINER END */

/* VIDEO SECTION START */

iframe {
  width: 100%;
  height: 415px;
}

section#main {
  width: 70vw;
  display: flex;
  margin: 1em;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 900px;
}

section#main section {
  display: flex;
  background: #fff;
  width: 100%;
  padding: 10px;
}

#video-title {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px;
}

#published-by {
  display: flex;
}

#subscribe-section {
  display: flex;
  border: 1px solid grey;
  border-radius: 2px;
  margin: 1em 0;
}

#subscribe-button .fa-youtube-play {
  color: #fff;
}

#subscribe-button {
  background: #f00;
  color: #fff;
  padding: 2px 6px;
  cursor: pointer;
}

.total-subscription {
  margin: 3px;
  line-height: initial;
}

#video-stats {
  display: flex;
  justify-content: space-between;
  height: 80px;
}

#social-icons {
  display: flex;
  justify-content: space-between;
  padding: 0 !important;
}

#social-section-left,
#social-section-right {
  display: flex;
  justify-content: space-between;
  padding: 0 0 10px 0;
  font-size: 11px;
}

#publisher-name {
  margin: 0 0 0 1em;
}

#publisher-image {
  width: 70px;
  height: 70px;
}

#video-description {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  height: 200px;
}

#video-description p {
  font-weight: 350;
  font-size: 13px;
  color: #333;
}

#views {
  align-self: flex-end;
  margin: 0 1em;
  font-size: 19px;
}

#video-name {
  margin: 0 0 1em;
}

/* VIDEO SECTION END */

/* SIDEBAR SECTION START */

aside {
  background: #fff;
  display: flex;
  flex-direction: column;
  margin: 1em;
  width: 30vw;
}

section.video-preview-content {
  display: flex;
  margin: 0.8em 1em;
}

section.video-preview-content img {
	height: 120px;
}

#show-more-button {
  font-size: 12px;
  margin-bottom: 1em;
}

div.details {
  margin: 0 0 0 1em;
}

h3.video-title {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
}

p.preview-user,
span.preview-views {
  font-size: 11px;
}

span.preview-views::after {
  content: "views";
}

div .fa-toggle {
  transform: scale(2, 1.3);
}

/* SIDEBAR SECTION END */

/* FOOTER SECTION START */

footer {
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  font-family: "YouTube Noto", Roboto, arial, sans-serif;
  background-color: #fff;
}

.footer-top-wrapper {
  display: flex;
  background-color: #fff;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(226, 226, 226);
}

.footer-bottom-wrapper a {
  text-decoration: none;
}

#footer-logo {
  display: flex;
  margin: 0 15px 0 4px;
}

.top-item {
  padding: 5px 10px;
  border: 1px solid rgb(211, 211, 211);
  width: auto;
  margin-right: 15px;
  color: #333;
  font-size: 11px;
  background-color: #f8f8f8;
  box-shadow: rgba(0, 0, 0, 0.046875) 0 1px 0;
  border-radius: 2px;
}

.logo,
.top-item:hover {
  cursor: pointer;
}

.top-item .fa {
  opacity: 0.8;
  font-size: 1.5em;
}

.fa-caret-down {
  font-size: 11px;
}

.footer-bottom-wrapper {
  display: flex;
  flex-direction: column;
  padding: 15px 0 15px 8px;
  margin-bottom: 8px;
}

#bottom-top {
  display: flex;
  margin-bottom: 8px;
  color: #000;
}

#bottom-top > a {
  color: #333;
  font-size: 13px;
  font-weight: bolder;
  margin-right: 18px;
}

.bottom-bottom {
  background: cornflowerblue;
}

#bottom-bottom > a {
  color: #666;
  font-size: 11px;
  font-weight: 500;
  margin-right: 18px;
}

#bottom-bottom > #bottom-last {
  margin-left: 10px;
}

.language {
  display: flex;
}

i.fa-youtube-play {
  color: #f00;
}

i.fa {
  margin: 0 5px;
}

#footer-logo span {
  font-weight: bolder;
  letter-spacing: -3px;
  font-size: 1.6em;
}

/* FOOTER SECTION END */

/* GENERAL CSS START */

.hidden-item {
  display: none;
}

.opacity6 {
  opacity: 0.6;
}

.light-text {
  font-size: 15px;
  color: #7c7c7c;
}

.thin-separator {
  margin: 0.3em 1em;
  border: 0.8px solid #7c7c7c;
}

.align-center {
  text-align: center;
}

/* GENERAL CSS END */

body {
  font: normal "YouTube Noto", Roboto, arial, sans-serif;
  background: #f1f1f1;
  font-family: "YouTube Noto", Roboto, arial, sans-serif;
}

.background-red {
  background: #f00;
}

.color-white {
  color: #fff;
}

.color-red {
  color: #f00;
}

button.icon-button {
  border: none;
  margin: 0 1em 0 0;
  background: #fff;
  color: #818282;
}



html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`  

export default Youtube;