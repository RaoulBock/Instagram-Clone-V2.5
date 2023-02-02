export const APP_PAGES = {
  APP: {
    LOGIN: "LOGIN",
    HOME: "HOME",
  },
};

export const COLORS = {
  BACKGROUND: "#1f2128",
  TITLE_TEXT_COLOR: "#fff",
  BK_BUTTON: "#236bfe",
  BK_INPUT: "#1d1c23",
};

import { Ionicons } from "react-native-vector-icons";

export const APP_ICON = {
  CAMERA: (
    <Ionicons
      name={"ios-camera-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  MESSAGE: (
    <Ionicons
      name={"ios-file-tray-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
};

export const STATUS_DATA = [
  {
    id: 1,
    name: "Lana Smith",
    image: [
      "https://www.nicepng.com/png/detail/503-5032612_girl-illustrations-illustration-girl-3d-girl-summer-tubes.png",
    ],
  },
];
