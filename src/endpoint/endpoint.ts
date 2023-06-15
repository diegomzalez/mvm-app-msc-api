export default class Endpoint {
  // Versions
  private static versions = ['v1', 'v2'];

  // Current endpoint
  private static getCurrentEndpoint() {
    return `api/${Endpoint.versions[Endpoint.versions.length - 1]}/`;
  }

  private static currentEndpoint = Endpoint.getCurrentEndpoint();

  // Authentication
  static authEndpoint = Endpoint.currentEndpoint + 'auth';
  // Entities endpoints
  static ratesEndpoint = Endpoint.currentEndpoint + 'rates';
  static currenciesEndpoint = Endpoint.currentEndpoint + 'currencies';
  static billsEndpoint = Endpoint.currentEndpoint + 'bills';
  static monthsEndpoint = Endpoint.currentEndpoint + 'months';
  static usersEndpoint = Endpoint.currentEndpoint + 'users';
  static studentsEndpoint = Endpoint.currentEndpoint + 'students';
  static parentsEndpoint = Endpoint.currentEndpoint + 'parents';
  static representativesEndpoint = Endpoint.currentEndpoint + 'representatives';
}
