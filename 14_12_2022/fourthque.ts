class item{
    itemid:number;
    itemname:string;
    itemprice:string;
    category:string;
constructor(itemid,name,price,category)
 {
        this.itemid=itemid;
        this.itemname=name;
        this.itemprice=price;
        this.category=category;
 }
 display=()=>{
        return this.itemid+ " "+this.itemname+" "+this.itemprice+" "+this.category;
 }
}

let item1 = new item(1,"Cadbury",100,"Edibles");
console.log(item1.display());