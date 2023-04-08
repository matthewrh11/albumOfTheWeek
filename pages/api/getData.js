import firebase_app from "../../config";
import { getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore";

const db = getFirestore(firebase_app)
export async function getDocument(collection, id) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getDocuments() {
    // return await getDocs(collection(db, "albums"));

    // const querySnapshot = await getDocs(collection(db, "albums"));
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data());
    // })

    let result = null;
    let error = null;

    try {
        result = await getDocs(collection(db, "albums"));
    } catch (e) {
        error = e;
    }

    return { result, error };

}