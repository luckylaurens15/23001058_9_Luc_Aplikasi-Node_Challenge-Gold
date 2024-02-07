# User

### User Login /users/login
Request Header
```
{
    "access-token": "<your access_token>"
}
```
Request Body
```
{
    "email": "<user email>",
    "password": "<user password>"
}
```
Request Params
```
not needed
```
Response (200 - Ok)
```
{
    "message": "This is login page."
}
```
Response (200 - Ok)
```
{
    "message": "Hi <user fullname>, Welcome Back to BingleShop!"
}
```
Response (401 - Unauthorized)
```
{
    "message": "User with email <user email> is not found or the password is incorect."
}
```
Response (400 - Bad Request)
```
{
    "message": "Failed to Authenticate due to Bad Request"
}
```
### User Signup /users/signup
Request Header
```
{
    "access-token": "<your access_token>"
}
```
Request Body
```
{
    "full_name": "<user fullname>",
    "email": "<user email>",
    "phone_number": "<user phone number (O)>",
    "password": "<user password>",
    "date_of_birth": "<user dob (O)>"
}
```
Request Params
```
not needed
```
Response (200 - Ok)
```
{
    "message": "This is signup page."
}
```
Response (200 - Ok)
```
{
    "message": "Hi <user fullname>, Welcome to BingleShop!"
}
```
Response (400 - Bad Request)
```
{
    "message": "<err>"
}
```
### User Update /users/edit:id
Request Header
```
{
    "access-token": "<your access_token>"
}
```
Request Body
```
{
    "full_name": "<user fullname (O)>",
    "email": "<user email (O)>",
    "phone_number": "<user phone number (O)>",
    "password": "<user password (O)>",
    "date_of_birth": "<user dob (O)>"
}
```
Request Params
```
{
    "id": "<user id>"
}
```
Response (200 - Ok)
```
{
    "message": "Edit user <user fullname> (id: <user id>) page."
}
```
Response (200 - Ok)
```
{
    "message": "Successfully Updated User <user fullname> with id <user id>!"
}
```
Response (400 - Bad Request)
```
{
    "message": "Cannot find any user with id <user id>"
}
```
Response (400 - Bad Request)
```
{
    "message": "<err>"
}
```

# Item

### GET all item /items
Request Header
```
{
    "access-token": "<your access_token>"
}
```
Request Body
```
not needed
```
Request Params
```
not needed
```
Response (200 - Ok)
```
{
    "data": [
        {
            "id": "<item id>",
            "item_name": "<item name>",
            "price": "<item price>",
            "stock": "<item stock>",
            "createdAt": "<item created time>",
            "updatedAt": "<item last updated time>"
        }
    ],
    "message": "Successfully get <number of items> items."
}
```
Response (404 - Not Found)
```
{
    "message": "cannot find any items"
}
```
Response (400 - Bad Request)
```
{
    "message": "<err>"
}
```

/orders