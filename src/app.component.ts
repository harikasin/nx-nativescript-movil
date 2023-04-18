import { Component, inject } from '@angular/core';
import { DrawerService } from './core/services';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  drawerService = inject(DrawerService);

  loadedDrawer(args) {
    this.drawerService.drawer = <RadSideDrawer>args.object;
}
}
