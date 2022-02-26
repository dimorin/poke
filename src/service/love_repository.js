import { getDatabase, ref, set, onValue, off } from "firebase/database";

class LoveRepository{
    constructor(FirebaseApp){
        this.db = getDatabase(FirebaseApp);
    }
    saveLoves(userUid, loves){
        set(ref(this.db, 'loves/' + userUid), loves);
    }
    readLoves(userUid, callback){
        const lovesRef = ref(this.db, 'loves/' + userUid);
        onValue(lovesRef, (snapshot) => {
            const data = snapshot.val();
            data && callback(data);
        });
        return () => off(lovesRef);
    }
}

export default LoveRepository;