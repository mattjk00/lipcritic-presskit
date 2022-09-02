import './App.css';
import { LinkSection } from './LinkSection';
import { Link, YoutubeLink, SoundcloudLink, GDriveLink } from './data/Link';
import { IntroSection } from './IntroSection';
import { ImageSection } from './ImageSection';
import { IMAGES } from './Image';


const VIDEOS = [
  GDriveLink('LIP CRITIC MERCURY LOUNGE', 'https://drive.google.com/file/d/1Tzjz-hST22K7TKyaxDlNpp_rilBSZvwL/preview'),
  /* YoutubeLink('HOW COULD YOU DO THIS TO ME WHY WOULD YOU DO THIS TO ME (MUSIC VIDEO)', 'https://www.youtube-nocookie.com/embed/pEHjTz3fkN4'),
  YoutubeLink('BEEN BORN LIVE VIDEO','https://www.youtube-nocookie.com/embed/YYQ1ve-h5BE'),
  YoutubeLink('STEEL TOE LIVE VIDEO','https://www.youtube-nocookie.com/embed/7pNX-AW0Kjo'), */
]

const MUSIC = [
  SoundcloudLink('KILL LIP CRITIC EP','https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/925118194&color=%233900ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'),
  /* SoundcloudLink('PLUS ****8','https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/713380171&color=%233900ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'),
  SoundcloudLink('HOW COULD YOU DO THIS TO ME WHY WOULD YOU DO THIS TO ME','https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/713382667&color=%233900ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true') */
];

function App() {
  return (
    <div className="App">
      <IntroSection></IntroSection>
      <br/>
      <LinkSection title="VIDEOS" links={VIDEOS}></LinkSection>
      <br/>
      <LinkSection title="MUSIC" links={MUSIC}></LinkSection>
      <br/>
      <ImageSection title="" images={IMAGES}></ImageSection>
      <br/>
      <div className='credit'><p>website by <a className='creditLink' href="https://mattjk00.github.io/me/">Matthew Kleitz</a></p></div>
    </div>
  );
}

export default App;
