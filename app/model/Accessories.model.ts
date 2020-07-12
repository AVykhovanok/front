export class Accessories {
    id : number;
    name : string;
    batteryType : number;
    color : string;
    numbOfBat : number;
    diameter : DoubleRange;
    price : number;
    description : string;
    picture : string;
    countryId : number;
    brandId : number;

    constructor(id: number, name: string, batteryType : number, 
      color : string, numbOfBat : number, diameter : DoubleRange, price : number,
      description : string, picture : string, countryId : number, brandId: number) {
        this.id = id;
        this.brandId = brandId;
        this.name = name;
        this.batteryType = batteryType;
        this.color = color;
        this.numbOfBat = numbOfBat;
        this.diameter = diameter;
        this.price = price;
        this.description = description;
        this.picture = picture;
        this.countryId = countryId;
      }
}