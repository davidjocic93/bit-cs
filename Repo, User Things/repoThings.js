import Repos from "./repos";
import Thing from "./things";



class RepoThings {

    getThings(thingsHandler) {
        let repos = new Repos();
        repos.getRepos((repos) => {
            var things = [];

            for (var i = 0; i < repos.length; i++) {
                var name = repos[i].name;
                var thing = new Thing (name);
                things.push(thing);
            }
            thingsHandler(things);
        });
    }

}

export default RepoThings;
