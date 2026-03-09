interface Mug{
    id: number;
    name: string;
    description: string;
    price: number;
    inStock: boolean;
    releaseDate: Date;
    image: string;
    type: string;
    tags: string[];
}

interface Manufacturer{
    id: number;
    name: string;
    country: string;
    active: boolean;
    logo: string;
}