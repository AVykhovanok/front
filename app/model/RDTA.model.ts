export class RDTA {
    id : number;
    brandId : number;
    name : string;
    color : string;
    diameter : DoubleRange;
    price : number;
    description : string;
    picture : string;
    countryId : number;
    typeRefill : string;
    volume: DoubleRange;

    constructor(id: number, name: string, typeRefill : string,
      color : string, diameter : DoubleRange, price : number,
      description : string, picture : string, countryId : number, volume: DoubleRange, brandId: number) {
        this.id = id;
        this.brandId = brandId;
        this.name = name;
        this.typeRefill = typeRefill;
        this.color = color;
        this.diameter = diameter;
        this.volume = volume;
        this.price = price;
        this.description = description;
        this.picture = picture;
        this.countryId = countryId;
      }
}