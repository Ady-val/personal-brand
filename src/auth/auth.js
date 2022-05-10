import { request } from "../api/request";

const req = request()

const AuthAPI = {
  
  signup(data, callback) {
    req({
      method: "POST",
      url: "/api/auth/signin",
      data: {
        email: data.email,
        password: data.pass,
        confirmPassword: data.confirmPass,
        userType: data.userType
      }
    }).then((res) => {
      const {role, email, id, userType} = res.data.user
      callback({status: true, role, email, id, userType})
    }).catch((err) => {
      console.log(err);
      callback({status: false, code: err.request.status})
    })
  },
  signin(data, callback) {
    req({
      method: "POST",
      url: "/api/auth/signup",
      data: {
        email: data.email,
        password: data.pass
      }
    }).then((res) => {
      const {role, email, id, userType} = res.data.user
      const { token } = res.data
      callback({status: true, role, email, id, userType, token})
    }).catch((err) => {
      console.log(err);
      callback({status: false, code: err.request.status ? err.request.status : 409})
    })
  },
  signout(callback) {
    req({
      method: "POST",
      url: "/api/auth/signout",
    }).then(res => {
      console.log(res.data);
      callback(res.data)
    }).catch(err => {
      console.log(err);
      callback()
    })
  }
};

export { AuthAPI };