export function LinkSection({title, links}) {


    const listItems = links.map((l, index) => 
        <li className="linkListItem" key={index}>
            <p className="linkTitle">{l.title}
                <br/>
                <a className="linkSrc" href={l.src}>{l.src}</a>
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