import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

declare var  __webpack_public_path__: string;
__webpack_public_path__ = `${(window as any).resourceBaseUrl}/angular-element-app/`;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
