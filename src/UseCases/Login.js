import jwt from 'jsonwebtoken';
import { ResponseError } from '../Config/error.js'; // Pastikan Anda memiliki modul ResponseError yang sesuai

export class Login {
  constructor(userRepository, partnerRepository, bcrypt, jwt) {
    this.userRepository = userRepository;
    this.partnerRepository = partnerRepository;
    this.bcrypt = bcrypt;
    this.jwt = jwt;
  }

  async execute(email, password) {
    try {
      // Cari akun dalam user repository
      const user = await this.userRepository.findByEmail(email);

      // Jika tidak ditemukan, cari akun dalam partner repository
      if (!user) {
        const partner = await this.partnerRepository.findByEmail(email);
        if (!partner) {
          throw new ResponseError(404, 'Account not found');
        }
        const isPasswordValid = await this.bcrypt.compare(password, partner.password);
        if (!isPasswordValid) {
          throw new ResponseError(401, 'Invalid password');
        }

        // Buat JWT token untuk partner
        const jwtToken = process.env.JWT_SECRET;
        const token = jwt.sign({ partnerId: partner.id, email: partner.email, role: 'partner' }, jwtToken, {
          expiresIn: '1h',
        });

        return { token, role: 'partner' };
      }

      // Jika ditemukan, verifikasi password untuk user
      const isPasswordValid = await this.bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new ResponseError(401, 'Invalid password');
      }

      // Buat JWT token untuk user
      const jwtToken = process.env.JWT_SECRET;
      const token = jwt.sign({ userId: user.id, email: user.email, role: 'user' }, jwtToken, {
        expiresIn: '1h',
      });

      return { token, role: 'user' };
    } catch (error) {
      throw error;
    }
  }
}
