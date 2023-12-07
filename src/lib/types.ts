export interface Exhibition {
    id: string;
    title: string;
    subtitle: string;
    shortDesc: string;
    location: string;
    date: string;
    coverImg: string;
}

export interface Performance {
    id: string;
    title: string;
    subtitle: string;
    shortDesc: string;
    location: string;
    date: string;
    coverImg: string;
}

export interface Release {
    id: string;
    title: string;
    subtitle: string;
    shortDesc: string;
    location: string;
    date: string;
    coverImg: string;
}

export interface Programming {
    id: string;
    title: string;
    subtitle: string;
    shortDesc: string;
    location: string;
    date: string;
    coverImg: string;
}

export interface Data {
    exhibitions: Exhibition[];
    performances: Performance[];
    releases: Release[];
    programming: Programming[];
}

export interface RouteParams {
    category: string;
    id: string;
}

export type ElementId = "1" | "2"