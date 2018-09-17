# Phonebook App

Simple Single Page Application (SPA) using Laravel, VueJS, Bulma CSS and MySQL database.

# Installation

1: Download the zip file or git clone the project.

2: Install laravel [https://laravel.com/docs/5.7/installation].

3: Install NodeJS [https://nodejs.org/en/download/]

4: Install Bulma CSS [https://bulma.io/]

5: Install vue-router [https://router.vuejs.org/]

## Configuring database

1: You must edit or create `.env` file in project's root path, configuring the DB_DATABASE, DB_USERNAME and DB_PASSWORD.

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=my_database_name
DB_USERNAME=my_username_database
DB_PASSWORD=my_password_database
```

2: Create a new database with the same name [DB_DATABASE] in your MySQL.

3: Go to the project root path.

4: Run the command:

```
$ composer install
```

5: Migrate data model:

```
$ php artisan migrate
```

6: Running the aplication:

```
$ php artisan serve
```

```
$ npm run watch
```

7: Use in your browser:

```
localhost:8000/phonebook
```
