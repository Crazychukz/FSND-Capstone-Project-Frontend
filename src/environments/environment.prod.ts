export const environment = {
  production: true,
  apiServerUrl: 'https://ccm-capstone.herokuapp.com/', // the running FLASK api server url
  auth0: {
    url: 'crazychukz', // the auth0 domain prefix
    audience: 'ccm-capstone', // the audience set for the auth0 app
    clientId: 'zAEQVz1mPVonXlKmdAbicMT9C9krAKfD', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:4200/home', // the base url of the running ionic application.
  }
};
