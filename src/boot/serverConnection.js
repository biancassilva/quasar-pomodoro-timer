import firebaseService from '../services/firebase'

const config = process.env.FIREBASE_CONFIG
firebaseService.fBInit(config)

export default async () => {

}
