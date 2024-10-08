# Dodatni zahtjevi
Nekoliko dodatnih informacija

## Nekoliko sigurnosnih mjera za zaštitu podataka
### Cross-Site Scripting (XSS) 
XSS (Cross-Site Scripting) se događa kada napadač ubaci zlonamjerne skripte u web aplikaciju, koje se zatim izvršavaju unutar preglednika korisnika. 
Da bi se to izbjeglo:
- Koristiti vitičaste zagrade {} za unos skripte unutar JSX-a. 
- Izbjegavati direktne manipulacije DOMa > koristiti React-ova stanja i "props" za upravljanje dinamičkim sadržajem.
- za polja koja renderiraju HTML kod, koristiti alate koji mogu očistiti korisnički unos od zlonamjernih skripti. 
### Cross-Site Request Forgery (CSRF)
CSRF omogućuje napadaču izvođenje radnji u ulozi ovjerenog korisnika bez njegovog znanja i prisutnosti. 
- CSRF Tokeni > uključiti tokene u obrasce ili u sklopu API zahtjeva
- SameSite Cookies > postaviti sesije cookies na SameSite=Strict ili SameSite=Lax kako bi se spriječili nesigurni zahtjevi između stranica
- provjera Referrer Header > potvrditi Referer header podatke kako bi se provjerilo dolaze li zahtjevi iz istog izvora
- pohraniti CSRF token u cookie te ga uključiti u skup zahtjeva "body" 
### Autentifikacije:
Koristiti standardne biblioteke za autentifikaciju (npr. Passport.js, Auth0) kako bi sigurno upravljali autentifikacijom.
- Upravljanje sesijama: Implementirati autentifikaciju temeljem tokena (JWT) i sigurne kolačiće.
- Ograničavanje broja pokušaja i zaključavanje računa
- Snažne lozinke
- Višefaktorska autentifikacija (MFA) kao dodatna sigurnost
### Izlaganje osjetljivih podataka
- razdvojiti API Endpoints za različite tipove podataka
- Filtrirati podatke na serveru
- Dohvaćati samo one podatke koje su potrebne za određenu stranicu ili komponentu
### Third-Party Dependencies ranjivost
Uvijek treba ažurirati biblioteke, jer se tako može zaštititi aplikacija od poznatih ranjivosti koje su ispravljene u novijim verzijama biblioteka.
- Pratiti sigurnosne obavijesti za biblioteke.
- kod odabira, razmotriti faktore poput performansi, kompatibilnosti, sigurnosti i dugoročne održivosti.

## Primjer testova za komponente
Test za Modal.js
Render Modal with Children: Osigurati da će modal prikazati prosljeđene elemente.
Close Modal on Click: testirati da se modal zatvori na klik ili vanka površine elementa.
Modal Header: provjera da li je točan naslov.
Cancel Button: osigurati da se modal zatvara na klik.

Test za Products.js
Render Loading State: Provjeriti animaciju
Render Products: Osigurati da se proizvodi ispravno prikazuju nakon što su učitani.
Handle Filtering: Potvrditi funkcionalnost filtriranja i sortiranja.
Pagination: Ispravni prikaz paginacije prema broju proizvoda.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
