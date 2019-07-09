import fireBase from "../firebase";

export default class Auth {
    static signUpWithEmail(email,password) {
         fireBase.auth.createUserWithEmailAndPassword(email,password)
    }

    static signInWithEmail(email,password) {
        fireBase.auth.signInWithEmailAndPassword(email,password)
    }
}