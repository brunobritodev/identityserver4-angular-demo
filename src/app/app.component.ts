import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';

import { authConfig } from './core/auth-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-identityserver4';

  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }


  public login() {
    this.oauthService.initLoginFlow();
  }

  public isLogged() {
    return this.oauthService.hasValidAccessToken();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public protectedRoute() {

  }

  public get name() {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims["given_name"];
  }
}
