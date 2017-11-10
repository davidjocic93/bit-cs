import Users from "./Users";
import Thing from "./thing";

class UserThings {
    constructor() { }

    getThings(onGetThings) {
        const users = new Users();

        users.getUsers((items) => {
            const things = [];
            items.forEach((item) => {
                const name = item.login;
                const avatarUrl = item.avatar_url;
                const url = item.url;

                const thing = new Thing(name, avatarUrl, url, "User");

                things.push(thing);
            });

            onGetThings(things);
        });
    }
}

export default UserThings;
