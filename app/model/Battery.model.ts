export class Battery {
    id : number;
    brandId : number;
    name : string;
    type : number;
    apm : number;
    color : string;
    price : number;
    description : string;
    picture : string;
    countryId : number;

    constructor(id: number, name: string, type : number, 
        apm : number, price : number, description : string, 
        picture : string, countryId : number, brandId: number) {
        this.id = id;
        this.brandId = brandId;
        this.name = name;
        this.type = type;
        this.apm = apm;
        this.price = price;
        this.description = description;
        this.picture = picture;
        this.countryId = countryId;
      }
}