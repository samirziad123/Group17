// Your app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDUwjJ0BblkFw0MkQhIQ_eyZ1N0jAUavuw",
authDomain: "color-corrector-87a5b.firebaseapp.com",
projectId: "color-corrector-87a5b",
storageBucket: "color-corrector-87a5b.appspot.com",
messagingSenderId: "1011557266029",
appId: "1:1011557266029:web:5e4da813f4d743be440564"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//init firebase UI widget
const ui = new firebaseui.auth.AuthUI(firebase.auth());

//configure UI widget with google sign in
const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            document.getElementById('user-email').innerHTML = "Logged in as: " + authResult.user.email;
            console.log(authResult);
            return false;
        }
    },
    signInFlow: 'popup',
    signInOptions: [
        //configure for Google
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            customParameters: {
                prompt: 'select_account'
            }
        }
    ]
};

ui.start('#sign-in-options', uiConfig);