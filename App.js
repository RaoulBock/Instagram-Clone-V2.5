import React from "react";
import { StatusBar } from "react-native";
import AppProvider, { AppContext } from "./Context/AppContext";
import { APP_PAGES, COLORS } from "./Context/settings";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  React.useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);

  return (
    <>
      <StatusBar
        style="light"
        barStyle={"light-content"}
        backgroundColor={COLORS.BACKGROUND}
        hidden={false}
        translucent={true}
      />

      {navPage === APP_PAGES.APP.LOGIN && <LoginScreen />}
      {navPage === APP_PAGES.APP.HOME && <HomeScreen />}
    </>
  );
};

export default App;
