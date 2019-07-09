import fireBase from "../firebase"

export default class Auth {
	static async signUpWithEmail(email, password) {
		try {
			return await fireBase.auth.createUserWithEmailAndPassword(email, password)
		} catch (error) {
			throw error
		}
	}

	static async signInWithEmail(email, password) {
		try {
			return await fireBase.auth.signInWithEmailAndPassword(email, password)
		} catch (error) {
			throw error
		}
	}

	static async signOut() {
		try {
			return await fireBase.auth.signOut()
		} catch (error) {
			throw error
		}
	}
}
