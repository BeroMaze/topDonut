
var DonutStatus = function(store, minCustomers, maxCustomers, aveDonuts) {
    this.store = store;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.aveDonuts = aveDonuts;
    // this.totalDonuts = null;
}

//customer random number generator
DonutStatus.prototype.customerRandom = function(min, max) {
  return customer = Math.floor(Math.random() * (max - min + 1)) + min;

}

DonutStatus.prototype.DonutPerHour = function() {
  var DonutsMade = this.customerRandom(this.minCustomers, this.maxCustomers) * this.aveDonuts;
  return Math.round(DonutsMade);
}

// all new locations
var dt = new DonutStatus('Downtown', 8, 43, 4.50);
var ch = new DonutStatus('Capital Hill', 4, 37, 2.00);
var slu = new DonutStatus('South Lake Union', 9, 23, 6.33);
var ww = new DonutStatus('Wedgewood', 2, 28, 1.25);
var bd = new DonutStatus('Ballard', 8, 58, 3.75);

console.log(dt.DonutPerHour() + " donuts/hour and " + customer + " customers");
console.log(ch.DonutPerHour() + " donuts/hour and " + customer + " customers");
console.log(slu.DonutPerHour() + " donuts/hour and " + customer + " customers");
console.log(ww.DonutPerHour() + " donuts/hour and " + customer + " customers");
console.log(bd.DonutPerHour() + " donuts/hour and " + customer + " customers");

var locations = [dt, ch, slu, ww, bd];

var createHours = locations.forEach(function(number) {
      number = number.DonutPerHour();
      return buyHour = [number, customer];
    // console.log(newHour + " donuts/hour and " + customer + " customers");
    // return Math.round(newHour);
});

console.log(buyHour)



