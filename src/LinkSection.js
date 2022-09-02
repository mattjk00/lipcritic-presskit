import { LINK_GD, LINK_SC, LINK_YT } from "./data/Link";

export function LinkSection({title, links}) {

    const youtubeFrame = (link) => {
        return (<div className="ytContainer"><iframe className="ytFrame" src={link.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>);
    };

    const soundcloudFrame = (link) => {
        return (<><iframe className="scFrame" width="95%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={link.src}></iframe></>);
    }

    const gdriveFrame = (link) => {
        return (<div className="ytContainer"><iframe className="ytFrame" src={link.src} width="95%" allow="autoplay"></iframe></div>);
    }

    const showLink = (link) => {
        if (link.type === LINK_YT) {
            return youtubeFrame(link);
        } else if (link.type === LINK_SC) {
            return soundcloudFrame(link);
        } else if (link.type === LINK_GD) {
            return gdriveFrame(link);
        } else {
            return (<a className="linkSrc" href={link.src}>{link.src}</a>);
        }
    }

    const listItems = links.map((l, index) => 
        <li className="linkListItem" key={index}>
            <p className="linkTitle">{l.title}
                <br/>
                {showLink(l)}
            </p>
            
        </li>
    );

    

    return (
        <div className="section">
            <h1 className="sectionHeader">{title}</h1>
            <ul className="linkList">
                {listItems}
            </ul>
        </div>
    );
}