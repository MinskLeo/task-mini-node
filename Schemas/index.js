// const mongoose = require('mongoose');

module.exports = function (mongoose) {

  const User = mongoose.model('User', {
    nickname: String,
    password: String,
    name: String,
    lastname: String,
    avatar: String,
    description: String,
    phone: String,
    email: String,
    roles: Array
  }, 'users');

  const UserRole = mongoose.model('UserRole', {
    name: String,
    type: String
  }, 'users_roles');

  const Project = mongoose.model('Project',{
    name: String,
    projectword: String,
    creator: String,
    description: String,
    members: Array,
    tasks: Array
  }, 'projects');

  const Task = mongoose.model('Task',{
    index: Number,
    title: String,
    taskword: String,
    description: String,
    role: String,
    resources: Array,
    creator: String,
    asigned: String,
    comments: Array,
    worklogs: Array,
    estimatedTime: Number,
    status: String
  }, 'tasks');

  const TaskComment = mongoose.model('TaskComment', {
    author: String,
    date: Date,
    description: String
  }, 'tasks_comments');

  const TaskStatus = mongoose.model('TaskStatus', {
    name: String
  }, 'tasks_statuses');

  const TaskWorklog = mongoose.model('TaskWorklog', {
    time: Number,
    date: Date,
    description: String
  }, 'tasks_worklogs');

  return {
    mongoose,

    schemas: {
      User,
      UserRole,
      Project,
      Task,
      TaskComment,
      TaskStatus,
      TaskWorklog
    }
  };
}