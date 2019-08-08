import {createConnection} from "typeorm";
import {Post} from "./entity/Post";
import {Category} from "./entity/Category";
import {Users} from "./entity/Users";

// connection settings are in the "ormconfig.json" file
createConnection().then(connection => {

    const user = new Users();
    user.Name = "Zevi1";

    return connection
        .getRepository(Users)
        .save(user)
        .then(user => {
            console.log("Post has been saved: ", user);
        });

}).catch(error => console.log("Error: ", error));