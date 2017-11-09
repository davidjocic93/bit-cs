import Users from "./users";
import Thing from "./things";



class UserThings {

    getThings(thingsHandler) {
        let users = new Users();
        users.getUsers((users) => {
            var things = [];

            for (var i = 0; i < users.length; i++) {
                var name = users[i].login;
                var userAvatar = users[i].avatar_url;
                var thing = new Thing (name, userAvatar);
                things.push(thing);
            }
            thingsHandler(things);
        });
    }

}

export default UserThings;
