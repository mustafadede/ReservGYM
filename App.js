import React, { useState } from "react";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import AppIntroSlider from "react-native-app-intro-slider";
import { _renderItem, _renderNextButton, _renderDoneButton } from "./src/screens/IntroSlider";
import data from "./src/data/lottieData";
import Root from "./src/Root";

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const _onDone = () => {
    setShowRealApp(true);
  };

  return (
    <Provider store={store}>
      {showRealApp ? (
        <Root />
      ) : (
        <AppIntroSlider renderItem={_renderItem} data={data} onDone={_onDone} renderNextButton={_renderNextButton} renderDoneButton={_renderDoneButton} />
      )}
    </Provider>
  );
};

export default App;
