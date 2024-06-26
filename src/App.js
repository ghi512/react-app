import logo from './logo.svg';
import './App.css';

function Header(){
  return <header>
  <h1><a href="/">CREATE REACT APP</a></h1>
</header>
}

function Nav(){
  return <nav>
  <ol>
    <li><a href="/read/1">Less to Learn</a></li>
    <li><a href="/read/2">Only One Dependency</a></li>
    <li><a href="/read/3">No Lock-In</a></li>
  </ol>
</nav>
}

function Article(){
  return <article>
  <h1>REACT site</h1>
  <a href='https://create-react-app.dev/'>https://create-react-app.dev/</a>
</article>
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
