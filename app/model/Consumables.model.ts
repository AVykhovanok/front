export class Consumables {
    id : number;
    brandId : number;
    name : string;
    diameter : DoubleRange;
    price : number;
    description : string;
    picture : string;
    countryId : number;
    volume : DoubleRange;
    weight : string;

    constructor(id: number, name: string, weight : string,
      diameter : DoubleRange, price : number, volume : DoubleRange, 
      description : string, picture : string, countryId : number, brandId: number) {
        this.id = id;
        this.brandId = brandId;
        this.name = name;
        this.volume = volume;
        this.weight = weight;
        this.diameter = diameter;
        this.price = price;
        this.description = description;
        this.picture = picture;
        this.countryId = countryId;
      }
}