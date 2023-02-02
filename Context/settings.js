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
  ELLIPSIS: (
    <Ionicons
      name={"ios-ellipsis-vertical-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
};

export const STATUS_DATA = [
  {
    id: 1,
    name: "Lana Smith",
    image:
      "https://www.nicepng.com/png/detail/503-5032612_girl-illustrations-illustration-girl-3d-girl-summer-tubes.png",
  },
  {
    id: 2,
    name: "Joe Evans",
    image:
      "https://i.pinimg.com/564x/54/3c/8c/543c8cae7c2a855bad1e82e041f3d119.jpg",
  },
  {
    id: 3,
    name: "Diana Slown",
    image: "https://data.whicdn.com/images/239773189/original.jpg",
  },
  {
    id: 4,
    name: "John Doe",
    image:
      "https://i.pinimg.com/236x/2e/89/f6/2e89f66576a09f23a1ecc0a09e16fbe7.jpg",
  },
  {
    id: 5,
    name: "Marina Martel",
    image: "https://data.whicdn.com/images/265677095/original.jpg",
  },
];
