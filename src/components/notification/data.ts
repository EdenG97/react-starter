interface NOTIFICATION_DATA {
  id: number;
  title: string;
  description: string;
  image: string;
  active: boolean;
  date: Date;
}

export const DUMMY_NOTIFICATION_DATA: NOTIFICATION_DATA[] = [
  {
    id: 1,
    title: "Reimbursement",
    description:
      "Lorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'',      comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sitamet..'', comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'', comes",
    image:
      "https://png.pngtree.com/png-clipart/20190611/original/pngtree-dollar-bill-png-image_3260003.jpg",
    active: true,
    date: new Date(),
  },
  {
    id: 2,
    title: "Reimbursement",
    description:
      "Lorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'',      comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sitamet..'', comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'', comes",
    image:
      "https://png.pngtree.com/png-clipart/20190611/original/pngtree-dollar-bill-png-image_3260003.jpg",
    active: true,
    date: new Date(),
  },
  {
    id: 21,
    title: "Sickness",
    description:
      "Lorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'',      comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sitamet..'', comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'', comes",
    image:
      "https://www.thecoldwire.com/wp-content/uploads/2021/08/Dollar-bank-note-money-background.jpeg",
    active: false,
    date: new Date(),
  },
  {
    id: 3,
    title: "Overtime",
    description:
      "Lorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'',      comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sitamet..'', comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'', comes",
    image:
      "https://c8.alamy.com/comp/2DACT8J/overtime-stamp-overtime-sign-round-grunge-label-2DACT8J.jpg",
    active: false,
    date: new Date(),
  },
  {
    id: 4,
    title: "Overtime",
    description:
      "Lorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'',      comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sitamet..'', comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'', comes",
    image:
      "https://c8.alamy.com/comp/2DACT8J/overtime-stamp-overtime-sign-round-grunge-label-2DACT8J.jpg",
    active: false,
    date: new Date(),
  },
  {
    id: 5,
    title: "Overtime",
    description:
      "Lorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'',      comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sitamet..'', comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'', comes",
    image:
      "https://c8.alamy.com/comp/2DACT8J/overtime-stamp-overtime-sign-round-grunge-label-2DACT8J.jpg",
    active: true,
    date: new Date(),
  },
  {
    id: 6,
    title: "Overtime",
    description:
      "Lorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'',      comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sitamet..'', comesLorem ipsum dolor sit amet..'', comesLorem ipsum dolor sit amet..'', comes",
    image:
      "https://c8.alamy.com/comp/2DACT8J/overtime-stamp-overtime-sign-round-grunge-label-2DACT8J.jpg",
    active: false,
    date: new Date(),
  },
];
