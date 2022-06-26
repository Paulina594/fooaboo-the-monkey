import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomIconRegistryService } from './shared/custom-icon-registry.service';
import { BackgroundService } from './shared/background/background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'browser-home';

  background = "url('assets/images/landscapes-min/filed-min.jpg')";

  constructor(
    private customIconRegistry: CustomIconRegistryService,
    private backgroundService: BackgroundService
  ) {}

  ngOnInit() {
    this.customIconRegistry.initIcons();

    const currentBackground = this.backgroundService.getCurrentBackground();

    if (currentBackground) {
      this.background = `url('${currentBackground.img}')`;
    }
  }
}
