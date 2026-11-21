import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import * as FS from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import * as AU from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import {firebaseConfig} from './firebase-config.js';
import {appCheckKey} from './appcheck-config.js?v=19';
export const ready=!!firebaseConfig.apiKey&&!firebaseConfig.apiKey.startsWith('ВСТАВЬ');
const app=ready?initializeApp(firebaseConfig):null;
if(ready&&appCheckKey){try{const AC=await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-check.js');AC.initializeAppCheck(app,{provider:new AC.ReCaptchaV3Provider(appCheckKey),isTokenAutoRefreshEnabled:true})}catch(e){}}
export const db=ready?FS.getFirestore(app):null;
export const auth=ready?AU.getAuth(app):null;
export {FS,AU};
