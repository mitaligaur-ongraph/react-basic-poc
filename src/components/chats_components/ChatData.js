const options = { hour12: false }

export const chatsData = [
  { id: 1, senderId: 10, receiverId: 2, date: (new Date('2024-03-19')).toLocaleString('en-US', options), content: 'test message by 10 to 2'},
  { id: 2, senderId: 2, receiverId: 10, date: (new Date('2023-03-18')).toLocaleString('en-US', options), content: 'test message by 2 to 10'},
  { id: 3, senderId: 10, receiverId: 2, date: (new Date('2024-03-18')).toLocaleString('en-US', options), content: 'test message by 10 to 2'},
  { id: 4, senderId: 10, receiverId: 3, date: (new Date('2024-03-18')).toLocaleString('en-US', options), content: 'test message by 10 to 3 - 1st'},
  { id: 5, senderId: 3, receiverId: 10, date: (new Date('2023-03-18')).toLocaleString('en-US', options), content: 'test message by 3 to 10 - 2nd'},
  { id: 6, senderId: 4, receiverId: 10, date: (new Date('2024-03-18')).toLocaleString('en-US', options), content: 'test message by 4 to 10'},
  { id: 7, senderId: 10, receiverId: 2, date: (new Date('2023-03-18')).toLocaleString('en-US', options), content: 'test message by 10 to 2'},
  { id: 8, senderId: 4, receiverId: 10, date: (new Date('2024-03-19')).toLocaleString('en-US', options), content: 'test message by 4 to 10'},
  { id: 9, senderId: 10, receiverId: 4, date: (new Date('2024-03-18')).toLocaleString('en-US', options), content: 'test message by 10 to 4'},
  { id: 10, senderId: 10, receiverId: 3, date: (new Date('2024-01-18')).toLocaleString('en-US', options), content: 'test message by 10 to 3 - 3rd'},
  { id: 11, senderId: 10, receiverId: 5, date: (new Date('2024-03-18')).toLocaleString('en-US', options), content: 'test message by 10 to 5'},
  { id: 12, senderId: 10, receiverId: 5, date: (new Date('2024-03-19')).toLocaleString('en-US', options), content: 'test message by 10 to 5'},

  { id: 13, senderId: 10, receiverId: 1, date: (new Date('2023-03-18')).toLocaleString('en-US', options), content: 'test message by 10 to 1 - 1st'},
  { id: 14, senderId: 1, receiverId: 10, date: (new Date('2024-03-19')).toLocaleString('en-US', options), content: 'test message by 1 to 10 - 2nd'},
  { id: 15, senderId: 1, receiverId: 10, date: (new Date('2024-03-18')).toLocaleString('en-US', options), content: 'test message by 1 to 10 - 3rd'},
  { id: 16, senderId: 1, receiverId: 10, date: (new Date('2023-03-18')).toLocaleString('en-US', options), content: 'test message by 1 to 10 - 4th'},

  { id: 17, senderId: 11, receiverId: 15, date: (new Date('2024-03-18')).toLocaleString('en-US', options), content: '11 to 15'},
]

export const usersData = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
  { id: 4, name: 'User 4' },
  { id: 5, name: 'User 5' },
  { id: 10, name: 'Current User' }
]
