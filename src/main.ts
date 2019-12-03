import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


(function() {

  var preload = document.getElementById("preload");
  var loading = 0;
  var id = setInterval(frame, 64);

  function frame() {
    if(loading == 100) {
      clearInterval(id);
    } else {
      loading = loading + 1;
      if(loading == 90){
        //preload.style.animation = "fadeout 1s ease";
      }
    }
  }

})();
