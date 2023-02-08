# RESERVATION API - REST 🤖
Una API REST como proyecto personal de backend la cual se encarga de registrar a usuarios que quieran reservar una habiación de hotel, pudiendo elegir entre que tipo de habitación quiere (por capacidad y/o precio).
Hecha con TypeScript, NodeJS (con Express) y TypeORM.

## Tecnologías usadas 🔧
- **TypeScript**
- **NodeJS**
- **ExpressJS**
- **TypeORM**
- **MySQL**
- **DBeaver**
- **JWT**
- **Bcrypt**
- **Morgan**
- **Cors**
- **Dotenv**
- **Ts-node-dev**

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

## RESERVATION 🎟️
- POST - Create reservation para una habitación. JSON para el Post al path ```localhost:3000/create-reservation```:
```
{
    "check_in": "yyyyMMdd",
    "check_out": "yyyyMMdd",
    "room": 1,
    "customer": 1
}
```
Ingresar la fecha y hora en formato yyyMMdd donde "yyyy" es el año, "MM" es el mes y "dd" es el día (usando todo 2 dígitos). [Como insertar la fecha](https://desarrolladores.me/2017/07/sql-server-forma-correcta-de-escribir-la-fecha/#:~:text=La%20manera%20correcta%20de%20escribir,momento%20de%20escribir%20la%20fecha.)

## ROOM 🛏️
- POST - Create room que es una de las opciones que un customer puede seleccionar para reservar. JSON para el Post al path ```localhost:3000/create-room```
```
{
    "name": "Medium room",
    "capacity": 3
}
```

- GET - Get a una lista de todas las habitaciones que ofrecemos. GET al path: ```localhost:3000/get-rooms```
```
Output:
{
    "message": "Rooms: ",
    "rooms": [
        {
            "id": 1,
            "name": "Habitación simple con 2 camas",
            "capacity": 2
        },
        {
            "id": 2,
            "name": "Habitación matrimonial con 1 cama",
            "capacity": 2
        },
        {
            "id": 3,
            "name": "Suite para 4 personas con 4 camas",
            "capacity": 4
        },
        {
            "id": 4,
            "name": "Suite para 2-4 personas con 2 camas matrimoniales",
            "capacity": 4
        },
        {
            "id": 5,
            "name": "Suite presidencial",
            "capacity": 3
        }
    ]
}
```

- GET - Get a la lista de todas las habitaciones para seleccionar y traer una sola, buscandola por el ID. GET al path: ```localhost:3000/get-room/:id```
```
Output:
{
    "id": 1,
    "name": "Habitación simple con 2 camas",
    "capacity": 2
}
```

- DELETE - Delete a un registro de la lista de habitaciones para borrarla (el customer ya no podrá reservarla). DELETE al path: ```localhost:3000/delete-room/:id```
```
Output: 
{
    "message": "Habitación ID #2 eliminada correctamente"
}
```
