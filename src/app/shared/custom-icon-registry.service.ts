import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class CustomIconRegistryService {
  constructor(
    private registry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  initIcons() {
    this.registry.addSvgIcon(
      'monkey',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/svg/monkey.svg'
      )
    );
    this.registry.addSvgIcon(
      'cool',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/svg/cool-svgrepo-com.svg'
      )
    );
  }
}
