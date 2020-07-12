export class Complects {
    id : number;
    brandId : number;
    name : string;
    batteryType : number;
    color : string;
    diameter : DoubleRange;
    price : number;
    description : string;
    picture : string;
    countryId : number;
    value : string;

    constructor(id: number, name: string, batteryType : number, 
      color : string, value : string, diameter : DoubleRange, price : number,
      description : string, picture : string, countryId : number, brandId: number) {
        this.id = id;
        this.brandId = brandId;
        this.name = name;
        this.batteryType = batteryType;
        this.color = color;
        this.value = value;
        this.diameter = diameter;
        this.price = price;
        this.description = description;
        this.picture = picture;
        this.countryId = countryId;
      }
}