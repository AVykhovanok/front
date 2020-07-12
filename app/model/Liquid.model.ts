export class Liquid {
    id : number;
    brandId : number;
    name : string;
    nic : string;
    value : string;
    price : number;
    description : string;
    picture : string;
    countryId : number;

    constructor(id: number, name: string,
      nic : string, value : string, price : number,
      description : string, picture : string, countryId : number, brandId: number) {
        this.id = id;
        this.brandId = brandId;
        this.name = name;
        this.nic = nic;
        this.value = value;
        this.price = price;
        this.description = description;
        this.picture = picture;
        this.countryId = countryId;
      }
}