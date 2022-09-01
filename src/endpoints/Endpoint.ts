export default class Endpoint {
  // Versions
  private static versions = ['v1', 'v2'];
  // Current endpoint
  private static currentEndpoint = `api/${this.versions.at(-1)}/`;
  // Entities endpoints
  static usersEndpoint = this.currentEndpoint + 'users';
  static studentsEndpoint = this.currentEndpoint + 'students';
  static parentsEndpoint = this.currentEndpoint + 'parents';
  static representativesEndpoint = this.currentEndpoint + 'representatives';
}
