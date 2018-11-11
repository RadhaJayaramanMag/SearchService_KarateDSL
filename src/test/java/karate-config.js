function() {    
  var env = karate.env; 
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var port = 3001;
  var baseURL = 'http://172.24.6.176';
  
  var config = {
    env: env,
	searchserviceURL: baseURL + ':' + port + '/search'
  };
  karate.configure('logPrettyRequest', true);
  //karate.configure('connectTimeout',30000);
  //karate.configure('readTimeout', 60000);
  
 /* 
 //Incase we have multiple environments for SearchService!!
  if (env == 'dev') {
    // customize
    
  } else if (env == 'e2e') {
    // customize
  }
  //Incase we have multiple environments for SearchService!!
  */
  
  karate.log('karate.env =', karate.env);
  karate.log('config.searchserviceURL =', config.searchserviceURL);
  return config;
}