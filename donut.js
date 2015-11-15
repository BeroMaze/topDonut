/////////////////////////// Object for Donut Stores ////////////////////////////////
var DonutStatus = function(store, minCustomers, maxCustomers, aveDonuts) {
          this.store = store; //////// location
          this.minCustomers = minCustomers; /////// min customer ave
          this.maxCustomers = maxCustomers; /////// max customer ave
          this.aveDonuts = aveDonuts; ///////////// average donuts for the store
          this.donutsArray = []; // /////////////// array to hold donuts sold per hour
          this.customerArray = []; //////////////// array to hold total customers per hour
          this.byHour = 0; //////////////////////// var used for total donuts for each hour
          this.totalMade = 0; ///////////////////// the total donuts made for the day
          this.customer = 0; ////////////////////// var used for total customers for each hour
          this.totalCustomers = 0; //////////////// sum of total customers

/////////////////////////// customer random number generator ///////////////////////////
  DonutStatus.prototype.customerRandom = function() {
           this.customer = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
                return this.customer; ///////////// returns total # of customers for the hour
  };
////////////////////////// Donut per hour random number generator///////////////////////
  var perHour = DonutStatus.prototype.DonutPerHour = function() {
              var donutsMade = this.customerRandom(this.minCustomers, this.maxCustomers) * this.aveDonuts;
              return Math.round(donutsMade); // returns total # of donuts made for the hour
  };

///////////////////////// function to put resaults into arrays ////////////////////////
            this.allDayDonuts = function() {
                for ( var i = 0; i < 13; i++) { ///////////////// for each loop to fill array 12 hours
                    var byHour = this.DonutPerHour(); /////////// runs function to create each total hour
                    this.donutsArray.push(byHour); ////////////// pushes total donuts into donut array
                    this.totalMade += byHour; /////////////////// adds up the total donuts made for the day
                    this.customerArray.push(this.customer); ///// pushes total customers for each hour
                    this.totalCustomers += this.customer; /////// adds up total customers
                }
            }
};

///////////////////////// all new locations //////////////////////////////
var dt = new DonutStatus('Downtown', 8, 43, 4.50);
var ch = new DonutStatus('Capitol Hill', 4, 37, 2.00);
var slu = new DonutStatus('South Lake Union', 9, 23, 6.33);
var ww = new DonutStatus('Wedgewood', 2, 28, 1.25);
var bd = new DonutStatus('Ballard', 8, 58, 3.75);

///////////////////////// Downtowns results ////////////////////////////
dt.allDayDonuts(); ////// run function for Downtown
console.log(dt.donutsArray + " Downtown donuts/hour."); //////////////// console log donuts per hour
console.log(dt.customerArray + " Downtown customer/hour."); //////////// console log customers per hour
document.getElementById('dtTotals').innerHTML = dt.totalMade; ////////// input total donuts made to html
document.getElementById('dtCustomers').innerHTML = dt.totalCustomers; // input total customers to html

///////////////////////// Capitol Hills results ////////////////////////////
ch.allDayDonuts(); ///// run function for Capitol Hill
console.log(ch.donutsArray + " Capitol Hill donuts/hour."); //////////////// console log donuts per hour
console.log(ch.customerArray + " Capitol Hill customer/hour."); //////////// console log customers per hour
document.getElementById('chTotals').innerHTML = ch.totalMade; ////////////// input total donuts made to html
document.getElementById('chCustomers').innerHTML = ch.totalCustomers; ////// input total customers to html

//////////////////////// South Lake Unions results /////////////////////////
slu.allDayDonuts();
console.log(slu.donutsArray + " South Lake Union donuts/hour."); //////////////// console log donuts per hour
console.log(slu.customerArray + " South Lake Union customer/hour."); //////////// console log customers per hour
document.getElementById('sluTotals').innerHTML = slu.totalMade; ///////////////// input total donuts made to html
document.getElementById('sluCustomers').innerHTML = slu.totalCustomers; ///////// input total customers to html

////////////////////// console logs Wedgewoods results //////////////////
ww.allDayDonuts(); ///// Wedgewood results
console.log(ww.donutsArray + " Wedgewood donuts/hour."); //////////////// console log donuts per hour
console.log(ww.customerArray + " Wedgewood customer/hour."); //////////// console log customers per hour
document.getElementById('wwTotals').innerHTML = ww.totalMade; /////////// input total donuts made to html
document.getElementById('wwCustomers').innerHTML = ww.totalCustomers; /// input total customers to html

////////////////////// console logs Ballards results /////////////////////
bd.allDayDonuts(); ///////// Ballard Results
console.log(bd.donutsArray + " Ballard donuts/hour.");  ////////////////// console log donuts per hour
console.log(bd.customerArray + " Ballard customer/hour.");  ////////////// console log customers per hour
document.getElementById('bdTotals').innerHTML = bd.totalMade;  /////////// input total donuts made to html
document.getElementById('bdCustomers').innerHTML = bd.totalCustomers; //// input total customers to html


