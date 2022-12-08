import auth from "@react-native-firebase/auth";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { Alert } from "react-native";
import database from "@react-native-firebase/database";
import md5 from "md5";
import { useSelector, useDispatch } from "react-redux";
import { getUserID } from "../redux/exampleSlicer/exampleSlicer";

GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  webClientId: "1080900538360-cm0bgggg1ncvdo0krlrtk01hlcpdio20.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: "", // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: "", // [Android] specifies an account name on the device that should be used
  iosClientId: "1080900538360-3m0htdr4mu58srgmss6s0kaemjtv91ii.apps.googleusercontent.com", // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

const googleReverseAlert = () => Alert.alert("Dikkat", "Vazgeçildi!", [, { text: "OK" }]);
const googleInProgress = () => Alert.alert("Dikkat", "İşlem Devam Ediyor!", [, { text: "OK" }]);
const googlePlayServiceNotAvailable = () => Alert.alert("Dikkat", "Google Play servisi yanıt vermiyor !", [, { text: "OK" }]);

async function onGoogleButtonPress(navigation) {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    this.setState({ userInfo });
    navigation.navigate("WelcomePage");
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      googleReverseAlert();
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      googleInProgress();
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      googlePlayServiceNotAvailable();
    } else {
      // some other error happened
    }
  }
}

const userNotFound = () => Alert.alert("Dikkat", "Kullanıcı Bulunamadı!", [, { text: "OK" }]);
const passwordWrong = () => Alert.alert("Dikkat", "Şifre Hatalı!", [, { text: "OK" }]);
const emailWrong = () => Alert.alert("Dikkat", "Email Adresiniz Hatalı !!", [, { text: "OK" }]);
const tooManyRequest = () => Alert.alert("Dikkat", "Çok Fazla Giriş Yapmayı Denediniz! 5 Dakika Sonra Tekrar Deneyiniz!", [, { text: "OK" }]);

const handleLogin = (email, password, navigation) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.navigate("WelcomePage", { userid: auth().currentUser.uid });
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        userNotFound();
      }
      if (error.code === "auth/wrong-password") {
        passwordWrong();
      }
      if (error.code === "auth/invalid-email") {
        emailWrong();
      }
      if (error.code === "auth/too-many-requests") {
        tooManyRequest();
      }
    });
};

const emailAlreadyInUse = () => Alert.alert("Dikkat", "E-mail adresi başka bir kullanıcı tarafından kullanılıyor !", [, { text: "OK" }]);
const weakPassword = () => Alert.alert("Dikkat", "Zayıf Şifre ! En Az 8 Karakter Olmalıdır !", [, { text: "OK" }]);

const handleRegister = (email, password, navigation) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const newUser = database().ref("Users").push();
      newUser
        .set({
          email: email,
          userid: auth().currentUser.uid,
        })
        .then(() => {
          console.log("User Registered to firebase!");
          navigation.navigate("Login");
        });
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        emailAlreadyInUse();
      }
      if (error.code === "auth/weak-password") {
        weakPassword();
      }
    });
};

const addReservation = (trainerName, dateTime, memberName) => {
  const newReservation = database().ref("Reservations").push();
  newReservation
    .set({
      trainerName: trainerName,
      dateTime: dateTime,
      memberName: memberName,
    })
    .then(() => {
      console.log("Reservation added");
    });
};

export { handleLogin, handleRegister, onGoogleButtonPress, addReservation };
