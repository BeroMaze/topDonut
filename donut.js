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
          this.customer = Number(0); ////////////////////// var used for total customers for each hour
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
  DonutStatus.prototype.table = function() {
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

////////// updates location with new info ///////////////////////////
DonutStatus.prototype.tableUpdate = function(i) {
  console.log(i);
              var spot = i + 2 // adds 2 to i to set to offset to the right area of the table.
              console.log(i);
              var tr = document.createElement("tr");
              var td = document.createElement('td');
              table = document.getElementById("table")
              td.innerHTML = this.store;
              tr.appendChild(td);
              table.insertBefore(tr, table.childNodes[spot]); // insets new info to the right row
              td.setAttribute("id", "storeStyle");

                for (i = 0; i < this.donutsArray.length; i++) {
                    var donuts = document.createElement('td');
                    donuts.innerHTML = this.donutsArray[i];
                    tr.appendChild(donuts);
                    table.insertBefore(tr, table.childNodes[spot]); // insets new info to the right row

                }

            var customerTable = document.createElement('td');
              customerTable.innerHTML = this.totalCustomers;
              tr.appendChild(customerTable);
              table.insertBefore(tr, table.childNodes[spot]); // insets new info to the right row
              customerTable.setAttribute("id", "customerStyle");

            var totalDonutsTable = document.createElement('td');
              totalDonutsTable.innerHTML = this.totalMade;
              tr.appendChild(totalDonutsTable);
              document.getElementById("table").appendChild(tr);
              table.insertBefore(tr, table.childNodes[spot]); // insets new info to the right row
              totalDonutsTable.setAttribute("id", "donutStyle");
  }

//////////// add a new store to the table ////////////////////////
document.getElementById('newSubmit').addEventListener('click', function () {
          var newStore = document.getElementById('newStore').value;
          var newMin = document.getElementById('newMin').value;
          var newMax = document.getElementById('newMax').value;
          var newAve = document.getElementById('newAve').value;
          var newresults = new DonutStatus(newStore, parseInt(newMin), parseInt(newMax), parseInt(newAve));
          if ((newStore === '') || (newMin === '') || (newMax === '') || (newAve === '')){
            alert('Please fill in all information needed.')
            return;
          }
          newresults.allDayDonuts();
          newresults.table();

          donutShops.push(newresults);
          var loc = document.getElementById('updateStore');
          var opt = newresults.store;
          var el = document.createElement('option');
          el.textContent = opt;
          el.value = opt;
          loc.appendChild(el);
          console.log(donutShops);
          console.log(newresults.totalCustomers);
          console.log(newresults.customerArray);
          console.log(donutShops);
});

/////////////// update a location with new numbers //////////////////////////
document.getElementById('updateSubmit').addEventListener('click', function (i) {
          var updateStore = document.getElementById('updateStore').value;
          var updateMin = parseInt(document.getElementById('updateMin').value);
          var updateMax = parseInt(document.getElementById('updateMax').value);
          var updateAve = parseInt(document.getElementById('updateAve').value);
          if ((isNaN(updateMin)) || (isNaN(updateMax)) || (isNaN(updateAve))){
                      alert('Please fill in all information needed.');
                      return;
          }
          else {
              for (i = 0; i < donutShops.length; i++) {
                  if(updateStore === donutShops[i].store) {
                      donutShops[i].minCustomers = parseInt(document.getElementById('updateMin').value);
                      donutShops[i].maxCustomers = parseInt(document.getElementById('updateMax').value);
                      donutShops[i].aveDonuts = parseInt(document.getElementById('updateAve').value);
                      document.getElementById("table").deleteRow(i + 1); // deletes the row of the old information for the store being changed
                      // console.log(i);
                      // console.log(donutShops[i].donutsArray);
                      // console.log(donutShops[i].customerArray);
                      // these both are needed so that the array is cleared other wise your array will be the old and new numbers
                      donutShops[i].donutsArray.length = 0; // clears out the array for the donuts per hour
                      donutShops[i].customerArray.length = 0; // clears out the array for customers per hour
                      donutShops[i].totalCustomers = 0; // puts total back to 0
                      donutShops[i].totalMade = 0; // puts total back to 0
                      // console.log(donutShops[i].donutsArray);
                      // console.log(donutShops[i].customerArray);
                      donutShops[i].allDayDonuts(); // runs the number generator and donuts per hour for the right object
                      donutShops[i].tableUpdate(i); // puts the new information into the table at the botton
                  }};
              }
          });

///////////////////////// all new locations //////////////////////////////
var dt = new DonutStatus('Downtown', 8, 43, 4.50);
var ch = new DonutStatus('Capitol Hill', 4, 37, 2.00);
var slu = new DonutStatus('South Lake Union', 9, 23, 6.33);
var ww = new DonutStatus('Wedgewood', 2, 28, 1.25);
var bd = new DonutStatus('Ballard', 8, 58, 3.75);

var donutShops = [dt, ch, slu, ww, bd]
// console.log(dt);


////////////////////// add each object to the dropdown box ///////////////////////
function update () {
  var loc = document.getElementById('updateStore');
  for(var i = 0; i < donutShops.length; i++){
      var opt = donutShops[i].store;
      var el = document.createElement('option');
      el.textContent = opt;
      el.value = opt;
      loc.appendChild(el);
  }};
update();

// ///////////////////////// Downtowns resaultslts ////////////////////////////
dt.allDayDonuts(); ////// run function for Downtown
dt.table(); ///// run push into table
// console.log(dt.customer);
// console.log(dt.customerArray);
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

// veiw downtown
var dtInfo = document.getElementById("table").rows[1].cells[0].onmouseover = function() {
  document.getElementById('info').innerHTML = 'Location: ' + dt.store + "   Minimum Customers: " + dt.minCustomers + '  Maximum Customers: ' + dt.maxCustomers + '  Avarage Donuts/hour: ' + dt.aveDonuts;
}
// hide downtown
var dtInfo = document.getElementById("table").rows[1].cells[0].onmouseout = function() {
  document.getElementById('info').innerHTML = '';
}
// view Cap hill
var chInfo = document.getElementById("table").rows[2].cells[0].onmouseover = function() {
  document.getElementById('info').innerHTML ='Location: ' + ch.store + "   Minimum Customers: " + ch.minCustomers + '  Maximum Customers: ' + ch.maxCustomers + '  Avarage Donuts/hour: ' + ch.aveDonuts;
}
// hide cap hill
var chInfo = document.getElementById("table").rows[2].cells[0].onmouseout = function() {
  document.getElementById('info').innerHTML ='';
}
// view South lake U
var sluInfo = document.getElementById("table").rows[3].cells[0].onmouseover = function() {
  document.getElementById('info').innerHTML ='Location: ' + slu.store + "   Minimum Customers: " + slu.minCustomers + '  Maximum Customers: ' + slu.maxCustomers + '  Avarage Donuts/hour: ' + slu.aveDonuts;
}
// hide south lake U
var sluInfo = document.getElementById("table").rows[3].cells[0].onmouseout = function() {
  document.getElementById('info').innerHTML ='';
}
// view Wedgewood
var wwInfo = document.getElementById("table").rows[4].cells[0].onmouseover = function() {
  document.getElementById('info').innerHTML ='Location: ' + ww.store + "   Minimum Customers: " + ww.minCustomers + '  Maximum Customers: ' + ww.maxCustomers + '  Avarage Donuts/hour: ' + ww.aveDonuts;
}
// hide Wedgewood
var wwInfo = document.getElementById("table").rows[4].cells[0].onmouseout = function() {
  document.getElementById('info').innerHTML ='';
}
// view Ballard
var bdInfo = document.getElementById("table").rows[5].cells[0].onmouseover = function() {
  document.getElementById('info').innerHTML ='Location: ' + bd.store + " <br/> Minimum Customers: " + bd.minCustomers + '    Maximum Customers: ' + bd.maxCustomers + '    Avarage Donuts/hour: ' + bd.aveDonuts;
}
// hide Ballard
var bdInfo = document.getElementById("table").rows[5].cells[0].onmouseout = function() {
  document.getElementById('info').innerHTML ='';
}

cheet('d o w n t o w n', function () {
  alert('Address: 720 3rd Ave Suite 100                          Phone: (206) 454-3694');
});

cheet('c a p i t o l h i l l', function () {
  alert('Address: 1206 Madison St                                Phone: (206) 708-7244');
});

cheet('s o u t h l a k e u n i o n', function () {
  alert('Address: 590 Terry Ave N                                Phone: (206) 995-8296');
});

cheet('w e d g w o o d', function () {
  alert('Address: 6855 35th Ave NE                               Phone: (206) 525-1966');
});

cheet('b a l l a r d', function () {
  alert('Address: 1416 NW 46th St #102                           Phone: (206) 454-3767');
});

// cheet('b l a c k o u t', function(){
//   document.getElementById('blackout').display = 'visible';
// })
// cheet('n o', function(){
//   document.getElementById('blackout').display = 'hidden';
// })


