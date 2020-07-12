export class Charger {
    id : number;
    brandId : number;
    name : string;
    apm : number;
    batteryType : number;
    color : string;
    numbOfBat : number;
    price : number;
    description : string;
    picture : string;
    countryId : number;

    constructor(id: number, name: string, batteryType : number, 
      color : string, numbOfBat : number, apm : number, price : number,
      description : string, picture : string, countryId : number, brandId: number) {
        this.id = id;
        this.brandId = brandId;
        this.name = name;
        this.batteryType = batteryType;
        this.color = color;
        this.numbOfBat = numbOfBat;
        this.apm = apm;
        this.price = price;
        this.description = description;
        this.picture = picture;
        this.countryId = countryId;
      }
}