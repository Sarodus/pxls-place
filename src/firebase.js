// import * as firebase from 'firebase'
import firebase from 'firebase'
import store from './store'
import { pixelReveice, pixelRemove } from './actions'

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
}

firebase.initializeApp(config)


const firestore = firebase.firestore()
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)

export const pixelsRef = firestore.collection('pixels')

pixelsRef.onSnapshot(snapshot =>{
    snapshot.docChanges().forEach(change => {
        if (change.type === "added" || change.type === "changed") {
            store.dispatch(pixelReveice(change.doc.data()))
        } else if(change.type === "removed") {
            store.dispatch(pixelRemove(change.doc.data()))
        }
    })
})
