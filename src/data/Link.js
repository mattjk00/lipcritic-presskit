export const LINK_PLAIN = "plain";
export const LINK_YT = "youtube";
export const LINK_SC = "soundcloud";
export const LINK_GD = "drive";

export class Link {
    constructor(title, src) {
        this.title = title;
        this.src = src;
        this.type = LINK_PLAIN;
    }
}

export function YoutubeLink(title, src) {
    let link = new Link(title, src);
    link.type = LINK_YT;
    return link;
}

export function SoundcloudLink(title, src) {
    let link = new Link(title, src);
    link.type = LINK_SC;
    return link;
}

export function GDriveLink(title, src) {
    let link = new Link(title, src);
    link.type = LINK_GD;
    return link;
}