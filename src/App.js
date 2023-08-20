import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header> 
        <h1>My Times</h1>
        <nav>
          <a href = "https://www.google.com" target='_blank'>News</a>
          <a href = "#">Trending</a>
          <a href = "#">Blog</a>
          <a href = "#">About</a>
        </nav>
      </header>
      <section>
        <article>
          <h3>Article 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br/>dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt <br/>in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src='https://cdn.pixabay.com/photo/2013/03/04/20/59/valley-90388_1280.jpg'
            height="200"
            width="200"
            alt="nature"
          />
        </article>

        <article>
          <h3>Article 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br/>dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt <br/>in culpa qui officia deserunt mollit anim id est laborum.</p>
          <video height="320" width="240" autoPlay controls>
            <source
              src='https://giphy.com/clips/studiosoriginals-reaction-emotion-goodnight-MYgJrNeiYf9moIxRw5'
              type='video/mp4'
            />
          </video>
        </article>

        <article>
          <h3>Article 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br/>dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt <br/>in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src='https://cdn.pixabay.com/photo/2016/06/11/19/34/eagle-1450672_1280.jpg'
            height="200"
            width="200"
            alt="nature"
          />
        </article>
      </section>
    </div>
  );
}
export default App;
