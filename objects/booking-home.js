'use strict'

var Continents = Object.freeze({
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTH_AMERICA: "SA",
    NORTH_AMERICA: "NA",
    AUSTRALIA: "AU"
});

// Prototypes

Person.prototype.getData = function () {
    return this.name + " " + this.surname + ", Date of birth: " + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ".";
}

Person.prototype.getAge = function () {
    return new Date().getFullYear() - this.dateOfBirth.getFullYear();
}

Adress.prototype.getData = function () {
    return this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + this.country.name;
}

Player.prototype.getData = function () {
    return this.country.name.charAt(0).toUpperCase() + this.country.name.charAt(1).toUpperCase() + this.country.name.charAt(2).toUpperCase() + ", " + parseFloat(this.winAmount).toFixed(2) + " eur, " + this.person.name + " " + this.person.surname + ", " + this.person.getAge() + " years";
}

BettingPlace.prototype.addPlayer = function (player) {
    this.listOfPlayers.push(player);
    this.numOfPlacePlayers++;
}

BettingPlace.prototype.allBets = function () {
    var sumOfAllBets = 0;
    for (var i = 0; i < this.listOfPlayers.length; i++) {
        sumOfAllBets += this.listOfPlayers[i].winAmount;
    }
    return sumOfAllBets;
}

BettingPlace.prototype.getData = function () {
    var output1 = "";
    output1 += this.adress.street + ", " + this.adress.postalCode + " " + this.adress.city + ", sum of all bets: " + this.allBets() + " eur" + "\n";

    for (var i = 0; i < this.listOfPlayers.length; i++) {
        var player = this.listOfPlayers[i];
        output1 += "\t\t" + player.getData() + "\n";        
    }
    return output1;
}

BettingHouse.prototype.addPlace = function (place) {
    this.listOfBettingPlaces.push(place);
    this.numberOfBettingPlaces++;
    this.totalNumOfPlayers += place.numOfPlacePlayers;
}

BettingHouse.prototype.getData = function () {
    var output = "";
    output += this.competition + ", " + this.numberOfBettingPlaces + " betting places, " + this.totalNumOfPlayers + " bets" + "\n";

    for (var i = 0; i < this.listOfBettingPlaces.length; i++) {

      var place = this.listOfBettingPlaces[i];
      output += "\t" +  place.getData() + "\n";      
    }

    return output;
}

// Functions

function Country (name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
}

function Person (name, surname, dateOfBirth){
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
}

/**
 * 
 * @param {*} person 
 * @param {*} betAmount 
 * @param {object} country 
 */

function Player (person, betAmount, country){
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
    this.winAmount = this.betAmount * this.country.odds;
}



function Adress (country, city, postalCode, street, number){
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
}

/**
 * 
 * @param {object} adress 
 */

function BettingPlace(adress){
    this.adress = adress;
    this.listOfPlayers = [];
    this.numOfPlacePlayers = 0;
}

function BettingHouse(competition){
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numberOfBettingPlaces = 0;
    this.totalNumOfPlayers = 0;
}

(function () {
    
    function createPlayer(pName, pSurname, pDateOfBirth, pBetAmount, countryName, countryOdds, countryContinent){
        var newPerson = new Person(pName, pSurname, new Date(pDateOfBirth));
        var newCountry = new Country(countryName, countryOdds, countryContinent);
        return new Player(newPerson, pBetAmount, newCountry);
    }

    function createBettingPlace (bCountry, bCity, bPostalCode, bStreet, bNumber) {
        var newAdress = new Adress(bCountry, bCity, bPostalCode, bStreet, bNumber);
        return new BettingPlace (newAdress);
    }

    var house = new BettingHouse ("Football World Cup Winner");

    var player1 = createPlayer ("David", "Jocic", "Jan 24 1993", 100, "Serbia", 50, Continents.EUROPE);
    var player2 = createPlayer ("Milan", "Nikolic", "Feb 28 1993", 1000, "Serbia", 50, Continents.EUROPE);
    var player3 = createPlayer ("Aleksandar", "Djuric", "Oct 30 1994", 500, "Serbia", 50, Continents.EUROPE);
    var player4 = createPlayer ("Vladimir", "Tosic", "Apr 23 1992", 10, "Serbia", 50, Continents.EUROPE);

    var place1 = createBettingPlace ("Serbia", "Belgrade", 11070, "Pohorska", 13);
    var place2 = createBettingPlace ("Serbia", "Belgrade", 11000, "Nemanjina", 22);

    place1.addPlayer (player1);
    place1.addPlayer (player2);
    place2.addPlayer (player3);
    place2.addPlayer (player4);

    house.addPlace (place1);
    house.addPlace (place2);

    console.log(house.getData());
}) ();