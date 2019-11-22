// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //Cambiar cuando tenga la base de datos verdadera
  firebaseConfig: {
    apiKey: "AIzaSyC4uCoEiCgd3P1m8OTJKmcJkq8LRaviztQ",
    authDomain: "mitfg-7a053.firebaseapp.com",
    databaseURL: "https://mitfg-7a053.firebaseio.com",
    projectId: "mitfg-7a053",
    storageBucket: "mitfg-7a053.appspot.com",
    messagingSenderId: "910277428053",
    appId: "1:910277428053:web:ff5c78e35c2a3d6333e5dc"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
