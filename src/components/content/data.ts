import {
  ADDRESS,
  DATE_OPTIONS,
  ICO,
  LOCATION,
  MEMBER_PRICE,
  NAME,
  POSITION,
} from "./constants";

export const DUMMY_ONLINE_LIST = [
  {
    id: 1,
    name: "Aang",
    image: "https://cdn-icons-png.freepik.com/512/6858/6858504.png",
    tag: "AIR",
  },
  {
    id: 2,
    name: "Katara",
    image:
      "https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png",
    tag: "WTR",
  },
  {
    id: 3,
    name: "Zuko",
    image:
      "https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-user-young-boy-avatar-icon-png-image_4827810.jpg",
    tag: "FR",
  },
  {
    id: 4,
    name: "Maki",
    image: "https://i.pngimg.me/thumb/f/720/comvecteezy420553.jpg",
    tag: "HD",
  },
  {
    id: 5,
    name: "Yuji",
    image: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
    tag: "HD",
  },
  {
    id: 6,
    name: "Luffy",
    image:
      "https://st3.depositphotos.com/3431221/13621/v/450/depositphotos_136216036-stock-illustration-man-avatar-icon-hipster-character.jpg",
    tag: "CPT",
  },
  {
    id: 7,
    name: "Zoro",
    image:
      "https://static.vecteezy.com/system/resources/previews/002/002/427/original/man-avatar-character-isolated-icon-free-vector.jpg",
    tag: "VC",
  },
  {
    id: 8,
    name: "Sanji",
    image:
      "https://i.pinimg.com/originals/3e/5b/a9/3e5ba9cf12565cbf201e2447753b9401.png",
    tag: "RH",
  },
  {
    id: 9,
    name: "Jinbe",
    image: "https://cdn-icons-png.flaticon.com/512/3641/3641963.png",
    tag: "IAR",
  },
  {
    id: 10,
    name: "Frangky",
    image:
      "https://www.svgrepo.com/show/382102/male-avatar-boy-face-man-user-8.svg",
    tag: "NKM",
  },
];

export const DUMMY_CARD_INFO = {
  name: NAME,
  position: POSITION,
  member_price: MEMBER_PRICE,
  date: new Date().toLocaleDateString("id-ID", DATE_OPTIONS),
  location: LOCATION,
  address: ADDRESS,
  image:
    "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
  ico: ICO,
};

export const DUMMY_NEWS = [
  {
    id: 1,
    name: "Ana Riswati",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-boy-avatar-4-1129037.png?f=webp&w=256",
    day: "Selasa",
    date: new Date().toLocaleDateString("id-ID", DATE_OPTIONS),
    comments: [
      {
        id: 1,
        description: "Kalimat 1 - 'Lorem ipsum dolor sit amet..', comes",
      },
      {
        id: 2,
        description: "Kalimat 2 - 'Lorem ipsum dolor sit amet..', comes",
      },
      {
        id: 3,
        description: "Kalimat 3 - 'Lorem ipsum dolor sit amet..', comes",
      },
      {
        id: 4,
        description: "Kalimat 4 - 'Lorem ipsum dolor sit amet..', comes",
      },
    ],
  },
  {
    id: 2,
    name: "Sahruk Fah",
    image: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    day: "Rabu",
    date: new Date().toLocaleDateString("id-ID", DATE_OPTIONS),
    comments: [
      {
        id: 1,
        description: "Kalimat 1 - 'Lorem ipsum dolor sit amet..', comes",
      },
      {
        id: 2,
        description: "Kalimat 2 - 'Lorem ipsum dolor sit amet..', comes",
      },
      {
        id: 3,
        description: "Kalimat 3 - 'Lorem ipsum dolor sit amet..', comes",
      },
      {
        id: 4,
        description: "Kalimat 4 - 'Lorem ipsum dolor sit amet..', comes",
      },
    ],
  },
  {
    id: 3,
    name: "Siswati",
    image: "https://cdn-icons-png.flaticon.com/512/5556/5556512.png",
    day: "Kamis",
    date: new Date().toLocaleDateString("id-ID", DATE_OPTIONS),
    comments: [
      {
        id: 1,
        description: "Kalimat 1 - 'Lorem ipsum dolor sit amet..', comes",
      },
      {
        id: 2,
        description: "Kalimat 2 - 'Lorem ipsum dolor sit amet..', comes",
      },
      {
        id: 3,
        description: "Kalimat 3 - 'Lorem ipsum dolor sit amet..', comes",
      },
      {
        id: 4,
        description: "Kalimat 4 - 'Lorem ipsum dolor sit amet..', comes",
      },
    ],
  },
];
