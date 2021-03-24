
export const environment = {
  production: false,
  apiServerUrl: 'https://ccm-capstone.herokuapp.com/', // the running FLASK api server url
  auth0: {
    url: 'crazychukz', // the auth0 domain prefix
    audience: 'ccm-capstone', // the audience set for the auth0 app
    clientId: 'zAEQVz1mPVonXlKmdAbicMT9C9krAKfD', // the client id generated for the auth0 app
    callbackURL: 'https://ccm-capstone-ui.herokuapp.com/home', // the base url of the running ionic application.
  }
};
