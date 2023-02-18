let users = [
    {
      name: 'Pera',
      lastName: 'Peric',
      id: '1df3',
    },
    {
      name: 'marko',
      lastName: 'markovic',
      id: '22rf',
    },
    {
      name: 'jovana',
      lastName: 'jovanovic',
      id: 'gf55',
    },
    {
      name: 'stefan',
      lastName: 'stefanovic',
      id: 'kio0',
    },
  ];
  
  // usersMap = {
  // 	'1df3': {
  // 		name: 'Pera',
  // 		lastName: 'Peric',
  // 		id: '1df3',
  // 	},
  // 	'22rf': {
  // 		name: 'marko',
  // 		lastName: 'markovic',
  // 		id: '22rf',
  // 	},
  // 	'gf55': {
  // 		name: 'jovana',
  // 		lastName: 'jovanovic',
  // 		id: 'gf55',
  // 	},
  // 	'kio0': {
  // 		name: 'stefan',
  // 		lastName: 'stefanovic',
  // 		id: 'kio0',
  // 	}
  // }
  
  const usersIdMap = users.reduce(function (acc, curr) {
    acc[curr.id] = curr;
    return acc;
  }, {});
  
  console.log(usersIdMap['kio0']);