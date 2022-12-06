import auth from "@react-native-firebase/auth";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

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

async function onGoogleButtonPress(navigation) {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
    navigation.navigate("WelcomePage");
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      alert("Vazgeçildi !");
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      alert("Bir hata meydana geldi !");
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      alert("Google Servislerinde Sorun Var  !");
    } else {
      // some other error happened
    }
  }
}

const handleLogin = (email, password, navigation) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.navigate("WelcomePage");
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        alert("Kullanıcı Bulunamadı!");
      }
      if (error.code === "auth/wrong-password") {
        alert("Şifreniz Hatalı!");
      }
      if (error.code === "auth/invalid-email") {
        alert("Email Adresiniz Hatalı !!");
      }
      if (error.code === "auth/too-many-requests") {
        alert("Çok Fazla Giriş Yapmayı Denediniz! 5 Dakika Sonra Tekrar Deneyiniz!");
      }
    });
};

const handleRegister = (email, password, navigation) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Kayıt Başarılı! Giriş Yapın !");
      navigation.navigate("Login");
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        alert("Kullanıcı Bulunamadı!");
      }
      if (error.code === "auth/wrong-password") {
        alert("Şifreniz Hatalı!");
      }
      if (error.code === "auth/invalid-email") {
        alert("Email Adresiniz Hatalı !!");
      }
      if (error.code === "auth/weak-password") {
        alert("Çok Fazla Giriş Yapmayı Denediniz! 5 Dakika Sonra Tekrar Deneyiniz!");
      }
    });
};

export { handleLogin, handleRegister, onGoogleButtonPress };
