// Restrictions
// User:
// nickname (string) 20
// name (string) 20
// lastname (string) 20
// avatar (string) 45
// description (string) (medium text)


// Schema
type Role = {
  name: string,
  type: 'front' | 'back' | 'design' | 'structure'
}

// Strict
type User = {
  id: id,
  name: string,
  lastName: string,
  nickname: string,
  roles: Array<Role.id>,
  avatar: string,
  description: string,
}

// Strict (Reference)
type Comment = {
  id: id,
  author: id,
  date: Date,
  content: string
}

// Strict(Reference)
type Worklog = {
  id: id,
  author: id,
  date: Date,
  time: number, //Hours
  content: string
}

// Strict (Reference)
type Task = {
  id: id,
  title: string,
  description: string,
  resources: Array<string>,
  role: Role.id,
  asigned: id,
  creator: id,
  comments: Array<Comment>,
  workLogs: Array<Worklog>,
  estimatedEnd: Date,
  status: 'Opened' | 'In Progress' | 'Done' | 'Ready for testing' | 'Troubles'
}

// Strict(Reference)
type Project = {
  id: id,
  name: string,
  handler: User.id,
  description: string,
  members: Array<User.id>,
  tasks: Array<Task>
}


// Examples:::::

// Roles
const roles: Array<Role> = [
  {
    id: 0,
    name: 'React Native',
    type: 'front'
  },
  {
    id: 1,
    name: 'React',
    type: 'front'
  },
  {
    id: 2,
    name: 'Angular',
    type: 'front'
  },
  {
    id: 3,
    name: 'Vue',
    type: 'front'
  },
  {
    id: 4,
    name: 'NodeJS',
    type: 'back'
  }
]

// Users
const user: User = {
  id: 1,
  nickname: 'MinskLeo',
  name:' Andrei',
  lastName: 'Siuniakou',
  avatar: '/avatars/1.png',
  description: 'Awesome React + React Native dev',
  // reference
  roles: [ 0, 1, 4 ]
}

const tasks: Array<Task> = [
  {
    id: 0,
    title: 'First task',
    asigned: 1,
    creator: 1,
    description: 'Short description here',
    estimatedEnd: new Date(2018,9,15),
    // Reference
    workLogs: [  ]
    // Can Be Reference...
    resources: [
      './resources/images/fhsa123.png'
    ]
    // Reference
    comments: [  ],

    // Can Be Reference...
    status: 'Opened',
  }
]
  
const project: Project = {
  id: 1,
  members: [ 1 ],
  name: 'oparysh.by',
  // reference
  tasks: [  ]
}


// MONGO
type UserMongo = {
  id: 1,
  nickname: 'MinskLeo',
  name: ' Andrei',
  lastName: 'Siuniakou',
  avatar: '/avatars/1.png',
  description: 'Awesome React + React Native dev',
  roles: [  ]
}

// ROOT: loader

// Start => LoginPage => Cookie (token)
// if token => verify token
// 