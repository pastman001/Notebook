export type Props = {
  contacts: Store[];
};

export type Store = {
  id: number;
  name: string;
  surName: string;
  phoneNumber: string;
  friends: Array<number>;
};
export const contacts: Store[] = [
  {
    id: 1,
    name: 'Pit',
    surName: 'Green',
    phoneNumber: '543-999-880',
    friends: [2, 5, 8],
  },
  {
    id: 2,
    name: 'John',
    surName: 'Doe',
    phoneNumber: '000-123-232',
    friends: [11, 12],
  },
  {
    id: 3,
    name: 'Jane',
    surName: 'Doe',
    phoneNumber: '151-453-321',
    friends: [2, 4, 19],
  },
  {
    id: 4,
    name: 'Helen',
    surName: 'Parker',
    phoneNumber: '111-272-510',
    friends: [1, 10],
  },
  {
    id: 5,
    name: 'Sam',
    surName: 'Michael',
    phoneNumber: '143-221-101',
    friends: [6, 7, 12],
  },
  {
    id: 6,
    name: 'Maria',
    surName: 'Thatcher',
    phoneNumber: '122-122-111',
    friends: [9, 13],
  },
  {
    id: 7,
    name: 'Tasha',
    surName: 'Black',
    phoneNumber: '115-120-229',
    friends: [14],
  },
  {
    id: 8,
    name: 'Matt',
    surName: 'Dimmers',
    phoneNumber: '100-889-340',
    friends: [15, 16, 17],
  },
  {
    id: 9,
    name: 'Sara',
    surName: 'Ann',
    phoneNumber: '435-660-989',
    friends: [18, 19],
  },
  {
    id: 10,
    name: 'Frank',
    surName: 'Bob',
    phoneNumber: '110-110-111',
    friends: [7, 9, 13],
  },
  {
    id: 11,
    name: 'Hanna',
    surName: 'Divine',
    phoneNumber: '132-229-813',
    friends: [19, 20],
  },
  {
    id: 12,
    name: 'Tomas',
    surName: 'Harrison',
    phoneNumber: '773-880-992',
    friends: [5, 11],
  },
  {
    id: 13,
    name: 'Mia',
    surName: 'Hensley',
    phoneNumber: '140-985-844',
    friends: [3, 5, 6, 7],
  },
  {
    id: 14,
    name: 'Paul',
    surName: 'Sands',
    phoneNumber: '523-433-919',
    friends: [11],
  },
  {
    id: 15,
    name: 'Michael',
    surName: 'Fox',
    phoneNumber: '115-121-788',
    friends: [],
  },
  {
    id: 16,
    name: 'Zen',
    surName: 'Peterson',
    phoneNumber: '455-665-789',
    friends: [7, 8],
  },
  {
    id: 17,
    name: 'Helen',
    surName: 'Bowie',
    phoneNumber: '122-333-454',
    friends: [16, 18],
  },
  {
    id: 18,
    name: 'Bob',
    surName: 'Henderson',
    phoneNumber: '125-688-900',
    friends: [10, 13, 15],
  },
  {
    id: 19,
    name: 'Mathew',
    surName: 'Cyrus',
    phoneNumber: '455-455-100',
    friends: [10, 20],
  },
  {
    id: 20,
    name: 'Bob',
    surName: 'Dillon',
    phoneNumber: '114-211-155',
    friends: [9, 3],
  },
];
