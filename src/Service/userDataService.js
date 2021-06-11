import http from "./http-common"

//Insert API call.
class UserDataService {
    createUser(userData){
        return http.post("/user/create", userData);
    }

    updateUser(userData){

    }

    displayAllUsers () {
        return http.get("/user");
    }
}

export default new UserDataService();
