export class Partner {
  constructor({
    email,
    password,
    businessName,
    type,
    location,
    latitude,
    longitude,
  }) {
    this.email = email;
    this.password = password;
    this.businessName = businessName;
    this.type = type;
    this.location = location;
    this.latitude = latitude;
    this.longitude = longitude;
  }
  static create({ id, email, businessName, type, location, latitude, longitude }) {
    return new Partner({ id, email, businessName, type, location, latitude, longitude });
  }
}
