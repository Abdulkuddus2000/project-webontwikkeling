export interface Mug{
    id: number;
    name: string;
    description: string;
    price: number;
    inStock: boolean;
    releaseDate: string;
    image: string;
    type: string;
    tags: string[];
    manufacturer: Manufacturer;
}

export interface Manufacturer{
    id: number;
    name: string;
    country: string;
    active: boolean;
    logo: string;
}