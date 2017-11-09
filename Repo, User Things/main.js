import RepoThings from "./repoThings";
import UserThings from "./userThings";


const repoThings = new RepoThings();
const userThings = new UserThings();


userThings.getThings((things) => {
    things.forEach((thing) => {
        console.log(things);
    });
});
