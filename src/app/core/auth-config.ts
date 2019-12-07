import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://jpproject-sso:5001',
  clientId: 'angular-demo',
  redirectUri: window.location.origin,
  scope: 'openid profile',
  requireHttps: false
};