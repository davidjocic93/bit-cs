import RepoThings from "./repoThings";
import UserThings from "./userThings";

const repoThings = new RepoThings();
const userThings = new UserThings();

// change this in order to use different data service
// let thingsService = userThings;
let thingsService = repoThings;


let input = $(".input");
let button = $(".button");
let img = $("img");
let link = $("a");
let container = $(".container");

thingsService.getThings((things) => {
    things.forEach((thing) => {
        // console.log(thing.getData());

        let avatarUrl = thing.getAvatarUrl();
        let url = thing.getUrl();
        let name = thing.getName();

    
        $(container).append(`<img class="slika" src="${avatarUrl}">`);
    
        $(container).append(`<a href="${url}" target="_blank" class="link"> ${name}</a> <br>`);
        
        
    });
});