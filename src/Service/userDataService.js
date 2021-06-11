import http from "./http-common"

//Insert API call.
class UserDataService {
    createUser(userData){
        return http.post("/user/create", userData);
    }

    updateUser(userData){
        return http.put('/user/edit', userData)
    }

    displayAllUsers () {
        return http.get("/user");
    }

    deleteUsers (id, userId) {
        return http.delete(`/user/delete?id=${id}`, {user: {user_id: userId}});
    }
}

export default new UserDataService();
