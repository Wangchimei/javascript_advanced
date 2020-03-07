const users = [
  { name: 'Bmo', premium: true },
  { name: 'Winnie', premium: false },
  { name: 'Joker', premium: true },
  { name: 'Chopper', premium: true },
  { name: 'Butter', premium: false },
];

const getPremUsers = users => {
  return users.filter(user => user.premium);
};

// export default users;
export { getPremUsers, users as default };
