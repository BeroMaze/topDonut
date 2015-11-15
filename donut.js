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
                for ( var i = 0; i < 12; i++) { ///////////////// for each loop to fill array 12 hours
                    var byHour = this.DonutPerHour(); /////////// runs function to create each total hour
                    this.donutsArray.push(byHour); ////////////// pushes total donuts into donut array
                    this.totalMade += byHour; /////////////////// adds up the total donuts made for the day
                    this.customerArray.push(this.customer); ///// pushes total customers for each hour
                    this.totalCustomers += this.customer; /////// adds up total customers
                }
            }
            /////////////// add info to /////////////////
this.table = function() {
var tr = document.createElement("tr");
var td = document.createElement('td');
td.innerHTML = this.store;
tr.appendChild(td);
td.setAttribute("id", "storeStyle");

for (i = 0; i < this.donutsArray.length; i++) {
 var donuts = document.createElement('td');
  donuts.innerHTML = this.donutsArray[i];
  tr.appendChild(donuts);
}

var customerTable = document.createElement('td');
customerTable.innerHTML = this.totalCustomers;
tr.appendChild(customerTable);
customerTable.setAttribute("id", "customerStyle");

var totalDonutsTable = document.createElement('td');
totalDonutsTable.innerHTML = this.totalMade;
tr.appendChild(totalDonutsTable);
document.getElementById("table").appendChild(tr);
totalDonutsTable.setAttribute("id", "donutStyle");
}
};


///////////////////////// all new locations //////////////////////////////
var dt = new DonutStatus('Downtown', 8, 43, 4.50);
var ch = new DonutStatus('Capitol Hill', 4, 37, 2.00);
var slu = new DonutStatus('South Lake Union', 9, 23, 6.33);
var ww = new DonutStatus('Wedgewood', 2, 28, 1.25);
var bd = new DonutStatus('Ballard', 8, 58, 3.75);




// ///////////////////////// Downtowns results ////////////////////////////
dt.allDayDonuts(); ////// run function for Downtown
dt.table(); ///// run push into table
// ///////////////////////// Capital Hill results ////////////////////////////
ch.allDayDonuts(); ////// run function for Downtown
ch.table(); ///// run push into table
// ///////////////////////// South Lake Union results ////////////////////////////
slu.allDayDonuts(); ////// run function for Downtown
slu.table(); ///// run push into table
// ///////////////////////// Wedgewood results ////////////////////////////
ww.allDayDonuts(); ////// run function for Downtown
ww.table(); ///// run push into table
// ///////////////////////// Ballard results ////////////////////////////
bd.allDayDonuts(); ////// run function for Downtown
bd.table(); ///// run push into table


