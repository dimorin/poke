import { getAuth, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

class AuthService{
    constructor(FirebaseApp){
        this.auth = getAuth(FirebaseApp);
        this.provider = new GoogleAuthProvider();
    }
    login(){
        return signInWithPopup(this.auth, this.provider);
    }
    logout(){
        signOut(this.auth);
    }
    onAuthChange(callback){
        // login 상태가 변하면 callback을 실행하라
        onAuthStateChanged(this.auth, callback);
    }
}

export default AuthService;