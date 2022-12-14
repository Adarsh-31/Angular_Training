interface shape
{
    shapename:string;
    printname();
}
class Rectangle implements shape
{
    private length:number;
    private breadth:number;
    constructor(l:number,b:number)
    {
        this.length=l;
        this.breadth=b;
    }
    shapename ="Rectangle";
    printname()
    {
        console.log(this.shapename);
    }
    area():number
    {
        return this.length*this.breadth;
    }
}
class Sphere implements shape
{
    private radius:number;

    constructor(r:number)
    {
        this.radius=r;

    }
    shapename ="Sphere";
    printname()
    {
        console.log(this.shapename);
    }
    area():number
    {
        return 4*3.14*this.radius*this.radius;
    }
}
class Cone implements shape
{
    private radius:number;
    private height:number;
    constructor(r:number,h:number)
    {
        this.radius=r;
        this.height=h;

    }
    shapename ="Cone";
    printname()
    {
        console.log(this.shapename);
    }
    area():number
    {
        return 3.14*this.radius*this.height;
    }
}
let objRect = new Rectangle(2,3);
objRect.printname();
console.log(objRect.area());
let objSph = new Sphere(2);
objSph.printname();
console.log(objSph.area());
let objCone = new Cone(2,4);
objCone.printname();
console.log(objCone.area());