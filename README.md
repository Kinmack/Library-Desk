# Library Desk

Library Desk is a PHP/MySQL library management application. It runs the real PHP application; it does not use a browser-only demo.

## Run locally with XAMPP

1. Place the project in `htdocs`.
2. Start Apache and MySQL.
3. Create and select a database named `library_database`, then import `database/library_db.sql`.
4. Open `http://localhost/library-system/`.

The local defaults are `DB_HOST=localhost`, `DB_NAME=library_database`, `DB_USER=root`, `DB_PASSWORD=` (empty), and `APP_URL=/library-system`.

## Deploy to PHP/MySQL hosting

GitHub Pages cannot run PHP or connect to MySQL. To run the application online, upload the project to a PHP-capable host, create a MySQL database and user there, select that database in phpMyAdmin, and import `database/library_db.sql`. Set `DB_NAME` to the database name assigned by the host. Configure these server-side environment variables in the host's control panel:

- `DB_HOST`: MySQL server hostname
- `DB_NAME`: database name
- `DB_USER`: database username
- `DB_PASSWORD`: database password
- `APP_URL`: URL path where the app is installed (use an empty value if installed at the domain root)

Do not commit production database credentials to GitHub.