// 1) роут /users/: id
// 2) Найти по id юзера из массива:
const users = [
  {
    id: 0,
    name: 'Andrei',
    lastname: 'Siuniakou'
  },
  {
    id: 1,
    name: 'Dmitriy',
    lastname: 'Shibut'
  },
  {
    id: 2,
    name: 'Pavel',
    lastname: 'Goroshcko'
  }
]

// и отправить в ответ
// 3) Если юзера такого нету - отправить статус 500