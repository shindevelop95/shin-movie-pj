import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {};

const firebase = Forebase.initializeApp(config);
export {firebase};