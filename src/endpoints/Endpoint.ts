export default class Endpoint {
  // Versions
  private static v1 = 'v1';
  // Current endpoint
  private static currentEndpoint = `api/${this.v1}/`;
  // Entities endpoints
  static usersEndpoint = this.currentEndpoint + 'users';
  static studentsEndpoint = this.currentEndpoint + 'students';
  static parentsEndpoint = this.currentEndpoint + 'parents';
  static representativesEndpoint = this.currentEndpoint + 'representatives';
}
