export class DropOffLocation {
    constructor ({ name, address, latitude, longitude, qrCode, url}){
        this.name = name;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.qrCode = qrCode;
        this.url = url;
    }
    static create({ name, address, latitude, longitude, qrCode, url }) {
        return new DropOffLocation({ name, address, latitude, longitude, qrCode, url});
      }
}