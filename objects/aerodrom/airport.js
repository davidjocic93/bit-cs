"use strict";

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

    console.log(airport.getData());



})();

function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getData = function () {
        return this.name + " " + this.surname;
    }
}

function Seat(number, category) {
    this.number = number || Math.round((((100 - 10) * Math.random()) + 10));
    this.category = category || "e";

    this.getData = function () {
        return this.number + ", " + this.category.toUpperCase();
    }

    // if (category === "b") {
    //     console.log("business");
    // } else if (category === "e") {
    //     console.log("economy");

    // } else {
    //     console.log("economy");
    // }
}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;

    this.getData = function () {
        return this.seat.getData() + ", " + this.person.getData();
    }



}

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = [];
    this.numOfPassengers = 0;

    this.addPassenger = function (passenger) {
        this.listOfPassengers.push(passenger);
        this.numOfPassengers++;
    }

    this.getData = function () {
        var output1 = "";
        output1 += "\t" + "Date : " + this.date + ". Relation : " + this.relation + "\n";

        for (var i = 0; i < this.listOfPassengers.length; i++) {
            var passenger = this.listOfPassengers[i];
            output1 += "\t\t" + passenger.getData() + "\n";
            
        }
        return output1;
    }

    

}

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.totalNumOfPassengers = 0;

    this.addFlight = function (flight) {
        this.listOfFlights.push(flight);
        this.totalNumOfPassengers += flight.numOfPassengers;
    }

    this.getData = function () {
        var output = "";
        output += "Airport: " + this.name + ", total passengers: " + this.totalNumOfPassengers + "\n\n";

        for (var i = 0; i < this.listOfFlights.length; i++) {

          var flight = this.listOfFlights[i];
          output += "\t" +  flight.getData() + "\n";
           
        }

        return output;
    }
}