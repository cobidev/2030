const peopleSick = ['man-sick', 'man-sick-2'];
const randomSick = peopleSick[Math.round(Math.random() * 1)];

export const charactersData = [
  {
    url: `/assets/china/${randomSick}.png`,
    speed: 1.5,
    id: 1,
  },
  {
    url: `/assets/china/man-normal.png`,
    speed: 2.7,
    id: 2,
  },
  {
    url: `/assets/china/man-normal-2.png`,
    speed: 2.2,
    id: 3,
  },
  {
    url: `/assets/china/man-normal.png`,
    speed: 2,
    id: 4,
  },
  {
    url: `/assets/china/man-normal-2.png`,
    speed: 2.4,
    id: 5,
  },
];
