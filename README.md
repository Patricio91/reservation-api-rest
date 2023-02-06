# RESERVATION API - REST 🤖
Una API REST como proyecto personal de backend la cual se encarga de registrar a usuarios que quieran reservar una habiación de hotel, pudiendo elegir entre que tipo de habitación quiere (por capacidad y/o precio).
Hecha con TypeScript, NodeJS (con Express) y TypeORM.

## CUSTOMER 🧍🏻
- POST - Crear un usuario en la página:
Endpoint: ```localhost:3000/sign-up```
JSON: 
```
{
    "firstname": "Nombre",
    "lastname": "Apellido",
    "password": "password",
    "age": 23,
    "dni": "12345678",
    "email": "correoelectronico@gmail.com",
    "phone": "+01 2345 678901"
}
```

- POST - Iniciar sesión mediante correo electrónico y contraseña
Endpoint: ```localhost:3000/log-in```
JSON: 
```
{
    "email": "correoelectronico1@gmail.com",
    "password": "password"
}
```

- GET - Obtener todos los usuarios de la DB
Endpoint: ```localhost:3000/customers```
Output: 
```
{
    "message": "Customers: ",
    "customers": [
        {
            "firstname": "Nombre",
            "lastname": "Apellido",
            "email": "correoelectronico1@gmail.com",
            "phone": "+01 2345 678901",
            "age": 23,
            "dni": "45093344"
        },
        {
            "firstname": "Nombre",
            "lastname": "Apellido",
            "email": "correoelectronico2@gmail.com",
            "phone": "+01 2345 678902",
            "age": 35,
            "dni": "31093344"
        }
    ]
}
```

- GET - Obtener un user buscandolo por su Id:
Endpoint: ```localhost:3000/customers/1```
Output: 
```
{
    "message": "Cliente #1",
    "customer": {
        "firstname": "Nombre",
        "lastname": "Apellido",
        "email": "correoelectronico1@gmail.com",
        "phone": "+01 2345 678901",
        "age": 23,
        "dni": "45093344"
    }
}
```

- DELETE - Eliminar un usuario por su Id:
Endpoint: ```localhost:3000/customer/1```
Output: 
```
{
    "message": "Cliente #1 eliminado"
}
```
