# API



## 1. /account/profile
### Necessary:

1) Token in header

### Response (Object):

Field | Type | Example | Description
------------ | ------------ | ------------- | ------------------
_id | string | "5bc361b8bb5cc6098429e310" | User id
nickname | string | "JhonyBoi" | Login
name | string | "Jhon" | User's name
lastname | string | "Sina" | User's lastname
avatar | string | "/avatars/5bc361b8bb5cc6098429e310.png" | User's avatar
description | string | "Awesome React + React Native dev" | User's BIO
roles | Array<string> | [ { name: "React", type: "front" }, { name: "ReactNative", type: "front" } ] | User's roles

## 2. /users/:id/profile
### Necessary:

1) Token in header
2) id of user

### Response (Object):
Field | Type | Example | Description
------------ | ------------ | ------------- | ------------------
_id | string | "5bc361b8bb5cc6098429e310" | User id
nickname | string | "JhonyBoi" | Login
name | string | "Jhon" | User's name
lastname | string | "Sina" | User's lastname
avatar | string | "/avatars/5bc361b8bb5cc6098429e310.png" | User's avatar
description | string | "Awesome React + React Native dev" | User's BIO
roles | Array<string> | [ { name: "React", type: "front" }, { name: "ReactNative", type: "front" } ] | User's roles

## 3. /users/:id/projects
### Necessary:

1) Token in header
2) id of user

### Response (Array):
Field | Type | Example | Description
------------ | ------------ | ------------- | ------------------
_id | string | "5bc361b8bb5cc6098429e310" | Project id
name | string | "Volvo App" | Project name
projectword | string | "VOLVO" | Task names
creator | string | "5bc361b8bb5cc6098429e310" | Creator's id
description | string | "Just simple description here" | Description
members | Array | [ "5bc361b8bb5cc6098429e310", "5bc361b8bb5cc6098429e310" ] | Members id's
tasks | Array | [  ] | Tasks array
