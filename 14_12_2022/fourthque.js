var item = /** @class */ (function () {
    function item(itemid, name, price, category) {
        var _this = this;
        this.display = function () {
            return _this.itemid + " " + _this.itemname + " " + _this.itemprice + " " + _this.category;
        };
        this.itemid = itemid;
        this.itemname = name;
        this.itemprice = price;
        this.category = category;
    }
    return item;
}());
var item1 = new item(1, "Cadbury", 100, "Edibles");
console.log(item1.display());
