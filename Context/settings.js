export const APP_PAGES = {
  APP: {
    LOGIN: "LOGIN",
    HOME: "HOME",
    MESSAGE: "MESSAGE"
  }
};

export const COLORS = {
  BACKGROUND: "#1f2128",
  TITLE_TEXT_COLOR: "#fff",
  BK_BUTTON: "#236bfe",
  BK_INPUT: "#1d1c23"
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
  HOME: (
    <Ionicons
      name={"ios-home-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  SEARCH: (
    <Ionicons
      name={"ios-search-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  NOTIFICATION: (
    <Ionicons
      name={"ios-notifications-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  USER: (
    <Ionicons
      name={"ios-person-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  SHARE: (
    <Ionicons
      name={"ios-share-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  LINK: (
    <Ionicons
      name={"ios-link-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  BOOKMARK: (
    <Ionicons
      name={"ios-bookmark-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  QR_CODE: (
    <Ionicons
      name={"ios-qr-code-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  RE_POST: (
    <Ionicons
      name={"ios-repeat-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  STAR: (
    <Ionicons
      name={"ios-star-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  UN_FRIEND: (
    <Ionicons
      name={"ios-person-remove-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  BACK: (
    <Ionicons
      name={"ios-arrow-back-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  ),
  CREATE: (
    <Ionicons
      name={"ios-duplicate-outline"}
      style={{ color: COLORS.TITLE_TEXT_COLOR, fontSize: 28 }}
    />
  )
};

export const STATUS_DATA = [
  {
    id: 1,
    name: "Lana Smith",
    image:
      "https://www.nicepng.com/png/detail/503-5032612_girl-illustrations-illustration-girl-3d-girl-summer-tubes.png"
  },
  {
    id: 2,
    name: "Joe Evans",
    image:
      "https://i.pinimg.com/564x/54/3c/8c/543c8cae7c2a855bad1e82e041f3d119.jpg"
  },
  {
    id: 3,
    name: "Diana Slown",
    image: "https://data.whicdn.com/images/239773189/original.jpg"
  },
  {
    id: 4,
    name: "John Doe",
    image:
      "https://i.pinimg.com/236x/2e/89/f6/2e89f66576a09f23a1ecc0a09e16fbe7.jpg"
  },
  {
    id: 5,
    name: "Marina Martel",
    image: "https://data.whicdn.com/images/265677095/original.jpg"
  }
];

export const POST_DATA = [
  {
    id: 1,
    profile_image:
      "https://i.pinimg.com/236x/2e/89/f6/2e89f66576a09f23a1ecc0a09e16fbe7.jpg",
    username: "John Martinez",
    time: "16 min ago",
    post: "https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto/uploads/2021/06/CON178%E2%80%93JuneBlog%E2%80%933D.jpg"
  },
  {
    id: 2,
    profile_image:
      "https://i.pinimg.com/564x/3c/cb/37/3ccb37041d5cc911f69b016ffdf83b7a.jpg",
    username: "Samantha Mortal",
    time: "4 hrs ago",
    post: "https://digitalsynopsis.com/wp-content/uploads/2015/05/3d-graffiti-street-art-anamorphic-odeith-1.jpg"
  }
];

export const MESSAGE_DATA = [
  {
    id: 1,
    name: "Joanna Evans",
    message:
      "Ipsum qui eu ipsum est deserunt cupidatat consequat Lorem consectetur ad ad ut reprehenderit veniam. Adipisicing amet cupidatat aute eiusmod magna exercitation dolore id et. Ipsum voluptate ex mollit ad ipsum ad exercitation ex tempor irure nostrud ullamco eiusmod. Id qui commodo enim veniam voluptate exercitation esse nostrud nisi nulla velit velit.",
    image:
      "https://i.insider.com/5cb8b133b8342c1b45130629?width=1136&format=jpeg"
  },
  {
    id: 2,
    name: "Liam Smith",
    message:
      "Aute commodo dolor minim sit nulla elit sunt veniam cillum in. Excepteur magna adipisicing est magna ea ea pariatur. Dolor officia consectetur esse sit adipisicing duis dolore aute sit.",
    image:
      "https://www.psypost.org/wp-content/uploads/2021/02/Confident-boss-business-man-with-smug-expression-arrogant-smirk-in-suit-and-tie-750x375.jpg"
  },
  {
    id: 3,
    name: "Diana Slown",
    message:
      "Pariatur voluptate sit irure ad veniam amet. Pariatur elit nisi culpa laborum do. Dolore et exercitation est Lorem ad aute officia.",
    image:
      "https://images.everydayhealth.com/images/tips-for-people-newly-diagnosed-with-multiple-sclerosis-alt-1440x810.jpg"
  },
  {
    id: 4,
    name: "Jennifer Tacker",
    message:
      "Do labore ullamco dolor et ex adipisicing magna officia nulla aute incididunt amet. Dolor laborum est nisi sit non qui nostrud. Adipisicing eiusmod magna labore culpa amet ipsum commodo quis. Esse cupidatat duis nulla officia mollit mollit cupidatat velit voluptate anim ad commodo.",
    image:
      "https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg"
  }
];
