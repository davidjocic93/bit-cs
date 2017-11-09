import axios from "axios";

class Repos {
    getRepos(handler) {
        axios.get("https://api.github.com/search/repositories?q=explore").then(function (response) {
            handler(response.data.items);
        });
    }
}

export default Repos;