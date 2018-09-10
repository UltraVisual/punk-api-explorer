export interface IBeerList {
    beers: [ IBeer ]
}

export interface IBeer {
    name: string,
    id: number,
    tagline: string,
    description: string,
    abv: number,
    ibu: number,
    srm: number
}