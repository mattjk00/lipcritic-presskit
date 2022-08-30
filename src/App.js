import logo from './logo.svg';
import './App.css';
import { LinkSection } from './LinkSection';
import { Link } from './data/Link';

const VIDEOS = [
  new Link('HOW COULD YOU DO THIS TO ME WHY WOULD YOU DO THIS TO ME (MUSIC VIDEO)', 'https://www.youtube.com/watch?v=pEHjTz3fkN4&t='),
  new Link('BEEN BORN LIVE VIDEO','https://www.youtube.com/watch?v=YYQ1ve-h5BE'),
  new Link('STEEL TOE LIVE VIDEO','https://www.youtube.com/watch?v=7pNX-AW0Kjo&t='),
]

const MUSIC = [
  new Link('KILL LIP CRITIC EP','https://soundcloud.com/lipcritic/sets/kill-lip-critic'),
  new Link('PLUS ****8','https://soundcloud.com/lipcritic/plus-8'),
  new Link('HOW COULD YOU DO THIS TO ME WHY WOULD YOU DO THIS TO ME','https://soundcloud.com/lipcritic/howcouldyoudothistomewhywouldyoudothistome')
];

function App() {
  return (
    <div className="App">
      <LinkSection title="VIDEOS" links={VIDEOS}></LinkSection>
      <br/>
      <LinkSection title="MUSIC" links={MUSIC}></LinkSection>
    </div>
  );
}

export default App;
