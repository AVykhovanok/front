export class RDA {
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

    constructor(id: number, name: string, typeRefill : string,
      color : string, diameter : DoubleRange, price : number,
      description : string, picture : string, countryId : number, brandId: number) {
        this.id = id;
        this.brandId = brandId;
        this.name = name;
        this.typeRefill = typeRefill;
        this.color = color;
        this.diameter = diameter;
        this.price = price;
        this.description = description;
        this.picture = picture;
        this.countryId = countryId;
      }
}