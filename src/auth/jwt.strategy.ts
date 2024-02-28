// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service'; // Import your authentication service

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret', // Replace with your JWT secret key
    });
  }

  async validate(payload: any) {
    // Implement logic to validate and extract user information from the JWT payload
    // This method will be called by Passport to validate and extract user information from the token
    // You can retrieve user information from the payload and return it
    // For example, you might fetch user details from a database using the payload's user ID
    return { userId: payload.sub, username: payload.username, role: payload.role };
  }
}
