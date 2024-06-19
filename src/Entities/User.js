export class User {
    constructor({email, password, name, dateOfBirth, latitude, longitude}) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    static create({ id, name, email, dateOfBirth, points, latitude, longitude, createdAt, updatedAt }) {
        return new User({ id, name, email, dateOfBirth, points, latitude, longitude, createdAt, updatedAt });
      }
}

