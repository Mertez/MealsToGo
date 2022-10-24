import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
// import { AccountNavigator } from "./account.navigator";

// import { AuthenticationContext } from "../../services/authentication/authentication.context";

function AccountNavigator() {
    return (
        <>

        </>
    );
}

export const Navigation = () => {
    const isAuthenticated = true; // useContext(AuthenticationContext);

    return (
        <NavigationContainer>
            {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
        </NavigationContainer>

    );
};