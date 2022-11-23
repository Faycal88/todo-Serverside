# REST API TODO application

This is a breif example of how to use TODO REST
API on your website or application.

## Run the app

    nodemon server

# REST API

The REST API to the TODO app is described below.

## Get a token / request an account with a valid email address

### Request

`POST /login/`

    'Accept: application/json' http://localhost:4000/login/
    body : {
        email : "example@email.com"
    }

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    keep-Alive: timeout=5

    {
    "message": "Wellcome",
    "email": "example@email.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2U4ODcyODQwMDBlMWY4YjVmNGY0OCIsImVtYWlsIjoiZXhhbXBsZUBlbWFpbC5jb20iLCJpYXQiOjE2NjkyMzY4NTB9.ME-yrFUFg-5oMYPMqVgTz2BJuTA3Pn0_KJFRvySUXcU"
    }

## Get a users Todo list

### Request

`POST /todo/get`

      Headers : {
        authorization : token
      }
     'Accept: application/json'  http://localhost:4000/todo/get

### Response

    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 298
    Connection: keep-alive
    Keep-Alive: timeout=5

    "data": {
        "_id": "637e887284000e1f8b5f4f48",
        "email": "example@email.com",
        "list": {
            "_id": "637e887284000e1f8b5f4f45",
            "todos": [
                {
                    "text": "This is a sample todo",
                    "isDone": false,
                    "_id": "637e887284000e1f8b5f4f46"
                }
            ],
            "createdAt": "2022-11-23T20:54:10.461Z",
            "updatedAt": "2022-11-23T20:54:10.461Z",
            "__v": 0
        },
        "__v": 0
    }

## PATCH Todo list

### Request

`POST /todo/add`

        Headers : {
        authorization : token
      }
     'Accept: application/json' http://localhost:4000/todo/add


    body {
     "list" :[
    {
        "text" : "postman1",
        "isDone": false
    },
    {
        "text" : "postman2",
        "isDone" : true
    }
            ]
    }

### Response

    Status 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    X-Powered-By: Express
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 274
    Keep-Alive: timeout=5

    {
    "todo": {
        "_id": "637e887284000e1f8b5f4f45",
        "todos": [
            {
                "text": "postman1",
                "isDone": false,
                "_id": "637e8b2584000e1f8b5f4f50"
            },
            {
                "text": "postman2",
                "isDone": true,
                "_id": "637e8b2584000e1f8b5f4f51"
            }
        ],
        "createdAt": "2022-11-23T20:54:10.461Z",
        "updatedAt": "2022-11-23T20:54:10.461Z",
        "__v": 0
    }
    }
