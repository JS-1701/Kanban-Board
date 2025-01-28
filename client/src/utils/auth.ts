import { JwtPayload, jwtDecode } from 'jwt-decode';


// TODO: return the decoded token
class AuthService {
  getProfile() {
    const legToken: JwtPayload = jwtDecode(this.getToken());
    return legToken;
    
  }
// TODO: return a value that indicates if the user is logged in
  loggedIn() {
    try {
      const token = this.getToken();
      if (token) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  // TODO: return a value that indicates if the token is expired
  isTokenExpired(token: string) {
    try {
      const expirationTime: { exp: number } = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return expirationTime.exp < currentTime;
    } catch (error) {
      return true;
    }
  }
 // TODO: return the token
  getToken(): string {
   const token = localStorage.getItem('id_token') || '';
    return token;
  }
  // TODO: set the token to localStorage
    // TODO: redirect to the home pag
  login(idToken: string) {
  localStorage.setItem('id_token', idToken);
  window.location.assign('/');
  }
  // TODO: remove the token from localStorage
    // TODO: redirect to the login page
  logout() {
  localStorage.removeItem('id_token');
  window.location.assign('/');
  }
}

export default new AuthService();
