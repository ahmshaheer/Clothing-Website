import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc, setDoc, doc, collection, writeBatch, query, getDocs } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyC2cMIrph8Zv_Axv0qNsaeowf7BTZyAsqI",
    authDomain: "fullwebsite-4b714.firebaseapp.com",
    projectId: "fullwebsite-4b714",
    storageBucket: "fullwebsite-4b714.appspot.com",
    messagingSenderId: "685790306237",
    appId: "1:685790306237:web:85f211dc330a292e877cd4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account'
})
export const googleSignInWithPopUp = () => {
    return signInWithPopup(auth, googleProvider)
}
export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    });
    await batch.commit()
    console.log('Done')
}
export const gettingCollectionAndDocuments = async () => {
    const collectionRef = collection(db, 'Categories')
    const q = query(collectionRef)

    const querySnapshots = await getDocs(q)

    const categoryMap = querySnapshots.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})
    return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userCollection = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userCollection)
    if (!userSnapshot.exists()) {
        let { displayName, email } = userAuth
        let createdAt = new Date()
        try {
            await setDoc(userCollection, {
                displayName, email, createdAt, ...additionalInformation
            })
        } catch (error) {
            console.log('Error is ' + error)
        }
    }
    return userCollection
}
export const signupcreateUserWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
}
export const realSignInWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}
export const realSignOut = () => signOut(auth)
export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback)

