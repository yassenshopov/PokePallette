import { FaReact, FaMoon, FaSun } from 'react-icons/fa';
import bgDark from "../src/img/bgDark.jpg"
import bgLight from "../src/img/bgLight.jpg"
// let bg = bgDark;

let darkTheme = true;

export default function Example() {
  return (
    <div id="example">
      <main id="main">
        <div id="backdrop"></div>

        <section id="section">
          <h1>Your website - inspired by colours</h1>
          <p>
            This page was built with <strong>React</strong>{' '}
            <FaReact id="faReact" />
          </p>
          <p>
            It allows you to enter a Pokemon's name (or simply its number in the
            Pokedex), and its top 3 colours will be extracted.
          </p>
          <div>
            <button id="scrollDown">Scroll down ⬇</button>
            <button id="darkMode" onClick={() => {

              let root = document.querySelector(":root");
              let temp_color = getComputedStyle(root).getPropertyValue("--color1");
              root.style.setProperty('--color1', getComputedStyle(root).getPropertyValue("--color5"));
              root.style.setProperty('--color5', temp_color);
              if (darkTheme) {
                // document.getElementById("main").style["background-position"] = 'left'
                root.style.setProperty('--bgURL', "url('"+ bgLight + "')")
                // bg = bgDark;
              } else {
                // bg = bgLight;
                // document.getElementById("main").style["background-position"] = 'right'
                root.style.setProperty('--bgURL', "url('"+ bgDark + "')")
              }
              darkTheme = !darkTheme;
            }}>    
            <div>
              <FaMoon />
            </div>
            </button>
          </div>
        </section>
        <aside>
          <div id="artCanvas"></div>

          {/* <article id="gradientArticle">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>

            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>

            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>

            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>

            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
          </article> */}
        </aside>
      </main>
      
      <div id="cards">
        <div onClick={() => {
            navigator.clipboard.writeText(document.getElementsByClassName("color2")[0].innerHTML);
            }}>
          <div className="color-card"></div>
          <p className="color2"></p>
        </div>
        <div onClick={() => {
            navigator.clipboard.writeText(document.getElementsByClassName("color3")[0].innerHTML);
            }}>
          <div className="color-card"></div>
          <p className="color3"></p>
        </div>
        <div onClick={() => {
            navigator.clipboard.writeText(document.getElementsByClassName("color4")[0].innerHTML);
            }}>
          <div class="color-card"></div>
          <p class="color4"></p>
        </div>
      </div>

      <div id="posts"></div>

      <footer id="footer">
        <p style={{ padding: '20px' }}>Copyright © PokePalette Studio - by <a href='https://github.com/yassenshopov'>Yassen Shopov</a></p>
      </footer>
    </div>
  );
}