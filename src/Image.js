export class SiteImage {
    constructor(src, minsrc) {
        this.src = src;
        this.minsrc = minsrc;   // low-res version
    }
}

export const IMAGES = [
    new SiteImage('./img/000075500015.jpg', './img/min-000075500015.jpg'),
    new SiteImage('./img/000075500018.jpg', './img/min-000075500018.jpg'),
    new SiteImage('./img/000075500020.jpg', './img/min-000075500020.jpg'),
    new SiteImage('./img/ABOUCHARD_LIPCRITIC_BROADWAY_031222-5799.jpg', './img/min-ABOUCHARD_LIPCRITIC_BROADWAY_031222-5799.jpg'),
    new SiteImage('./img/ABOUCHARD_LIPCRITIC_BROADWAY_031222-5810.jpg', './img/min-ABOUCHARD_LIPCRITIC_BROADWAY_031222-5810.jpg'),
    new SiteImage('./img/ABOUCHARD_LIPCRITIC_BROADWAY_031222-5827.jpg', './img/min-ABOUCHARD_LIPCRITIC_BROADWAY_031222-5827.jpg'),
    new SiteImage('./img/DSC_0618.jpg', './img/min-DSC_0618.jpg'),
];