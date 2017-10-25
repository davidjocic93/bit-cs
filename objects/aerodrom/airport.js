"use strict";

Person.prototype.getData = function () {
    return this.name + " " + this.surname;
}

Seat.prototype.getData = function () {
    return this.number + ", " + this.category.toUpperCase();
}

Passenger.prototype.getData = function () {
    return this.seat.getData() + ", " + this.person.getData();
}

Flight.prototype.addPassenger = function (passenger) {
    for (var i = 0; i < this.listOfPassengers.length; i++) {
        var seat = this.listOfPassengers[i].seat.number;
        if (passenger.seat.number === seat) {
          throw new Error ("Seat is already taken!") 
        }
    }
    this.listOfPassengers.push(passenger);
    this.numOfPassengers++;
}

Flight.prototype.getData = function () {
    var splited = this.relation.split("-");
    var departCity = splited[0];
    var destinationCity = splited[1];
    var output1 = "";
    output1 += "\t" + "Date : " + this.date + ". Relation : " + departCity.charAt(0)  + departCity.charAt(departCity.length - 2).toUpperCase() + " - " + destinationCity.charAt(1) + destinationCity.charAt(destinationCity.length - 1).toUpperCase() + "\n";

    for (var i = 0; i < this.listOfPassengers.length; i++) {
        var passenger = this.listOfPassengers[i];
        output1 += "\t\t" + passenger.getData() + "\n";        
    }
    return output1;
}

Airport.prototype.addFlight = function (flight) {
    this.listOfFlights.push(flight);
    this.totalNumOfPassengers += flight.numOfPassengers;
}

Airport.prototype.getData = function () {
    var output = "";
    output += "Airport: " + this.name + ", total passengers: " + this.totalNumOfPassengers + "\n\n";

    for (var i = 0; i < this.listOfFlights.length; i++) {

      var flight = this.listOfFlights[i];
      output += "\t" +  flight.getData() + "\n";      
    }
    return output;
}

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Seat(number, category) {
    this.number = number || Math.round((((100 - 10) * Math.random()) + 10));
    this.category = category || "e";
}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
}

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = [];
    this.numOfPassengers = 0;
}

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.totalNumOfPassengers = 0;
}

(function () {
    
        function createFlight (fligtRelation, flightDate) {
            return new Flight (fligtRelation, flightDate);
        }
    
        function createPassenger (firstName, sureName, seatNumber, seatCategory) {
            var person = new Person (firstName, sureName);
            var seat = new Seat (seatNumber, seatCategory);
            return new Passenger (person, seat);
        }
    
        var airport = new Airport ();
    
        var belgradeNewYork = createFlight ("Belgrade - New York", "Oct 25 2017");
        var barcelonaBelgrade = createFlight ("Barcelona - Belgrade", "Nov 11 2017");
    
        var johnSnow = createPassenger ("John", "Snow", 1, "b");
        var cerseiLannister = createPassenger ("Cersei", "Lannister", 2, "b");
        var daenerysTargaryen = createPassenger ("Daenerys", "Targaryen", 14);
        var tyrionLannister = createPassenger ("Tyrion", "Lannister");
    
        belgradeNewYork.addPassenger(johnSnow);
        belgradeNewYork.addPassenger(cerseiLannister);
    
        barcelonaBelgrade.addPassenger(daenerysTargaryen);
        barcelonaBelgrade.addPassenger(tyrionLannister);
    
        airport.addFlight(belgradeNewYork);
        airport.addFlight(barcelonaBelgrade);
    
        console.log(airport);

    })();