import axios from "axios";

class Users {
    getUsers(handler) {
        axios.get("https://api.github.com/search/users?q=david").then(function (response) {
            handler(response.data.items);
        });
    }
}

export default Users;