import { LazyLoadImage } from 'react-lazy-load-image-component';

export function ImageSection({title, images}) {
    
    const imageListItems = images.map((img, index) => 
        <li className="imgListItem" key={index}>
            {/*  <img className="img" src={img.minsrc} alt="uh-oh"/> */}
            <LazyLoadImage
                className='img'
                src={img.src}
                placeholderSrc={img.minsrc}
                effect="blur"
            />
        </li>
    );

    return (
        <div className="section">
            <h1 className="sectionHeader">{title}</h1>
            <ul className="imgList">
                {imageListItems}
            </ul>
        </div>
    );
}