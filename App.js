import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  // open webview url
  const url = `https://www.google.com/`;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <WebView source={{ url }} />
    </SafeAreaView>
  );
}
