/**
 * Created by steffen on 17-02-2016.
 */
// with prototype you can add functions on objects, like here i have created a function stealsomeload
// now i can call truck1.stealsomeload on my object. like it was a function on the object

function Truck(){

    this.regnumber = ""
    this.type = ""
    this.loadtons = 20
    this.loaditems = function loaditems (targetTruck){

        targetTruck.loadtons +=1
        console.log(this.type + " loaded 1 tons on " + targetTruck.type)
    }
}

var truck1 = new Truck()
var truck2 = new Truck()

truck1.regnumber = "AB89627",truck1.type = "Heavyloader"
truck2.regnumber = "KR12345",truck2.type = "Littlehelper"


Truck.prototype.Stealsomeload = function Stealsomeload (targetTruck){
    targetTruck.loadtons -=5
    console.log(this.type + " just stole 5 t cargo from " + targetTruck.type)
}
// add properties to an object
Truck.prototype.fuel = 60


truck1.loaditems(truck2)

truck1.Stealsomeload(truck2)
console.log(truck1.loadtons)
console.log(truck2.loadtons)
console.log(truck1.fuel)


