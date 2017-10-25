'use strict'

(function () {
    console.log("HI");
}) ();

var Continents = {
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTH_AMERICA: "SA",
    NORTH_AMERICA: "NA",
    AUSTRALIA: "AU"
}

var freezedContinents = Object.freeze(Cont);



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





function Player (person, betAmount, country){
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
}
function Address (country, city, postalCode, street, number){
    this.country = country;
    this.city = city;
    this.postalCode= postalCode;
    this.street = street;
    this.number = number;
}
function BettingPlace(address){
    listOfPlayers=[];
}
function BettingHouse(competition){
    listOfBettingPlaces=[];
    numberOfPlayers=0;


}

