var admin = require('firebase-admin');

class DatabaseConnection {
  constructor() {
    this.database = admin.database();
  }



  getRef(ref) {
    return this.database.ref("/").child(ref);
  }
}


export default DatabaseConnection;