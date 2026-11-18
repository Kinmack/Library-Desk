# Library Desk

Library Desk is a PHP/MySQL library management project with a static demo that can run on GitHub Pages.

## GitHub Pages demo

The Pages site uses `index.html` and the files in `assets/`. It includes sample books, members, authors, categories, and loans. You can browse, search, add, edit, issue, and return records.

This is a **browser-only demo**: changes are stored in the current browser with `localStorage`. They are not shared with other visitors or devices, and there is no real sign-in or server database. Use the PHP application with MySQL for shared, persistent data.

To publish it, open the repository's **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, then save. GitHub Pages will serve `index.html`; it does not execute PHP files.

## Run the full PHP application locally

Use XAMPP (or another PHP/MySQL server), start Apache and MySQL, import `database/library_db.sql`, and open the project through the local web server. The `.php` pages require PHP sessions and a MySQL database; opening them as static files or through GitHub Pages will not run the application.