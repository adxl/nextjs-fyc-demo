import '../../styles/index.css';
import '../../styles/App.css';
import Nav from '../components/Nav';

export default function App({ Component, pageProps }) {
  return (
    <div id="root">
      <div className="App">
        <Nav />
        <main className="p-16">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
