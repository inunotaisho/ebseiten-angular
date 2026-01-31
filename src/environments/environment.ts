// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AppEnvironment } from "./environment.type";

export const environment: AppEnvironment = {
  appName: 'Ethan Burrow Fairweather portfolio',
  production: false,
  apiUrl: `http://inunotaishoapi-dev.us-west-2.elasticbeanstalk.com`,
  features: {
    mockAuth: true,
  },
  analytics: {
    enabled: true,
    provider: 'console',
  },
  version: '0.0.1',
  github: {
    username: 'YOUR_GITHUB_USERNAME',
    pat: 'YOUR_GITHUB_PAT',
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
