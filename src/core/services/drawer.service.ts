import { Injectable } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Injectable({
    providedIn: 'root'
})
export class DrawerService {

    drawer: RadSideDrawer;

    open() {
        this.drawer.showDrawer();
    }

    close() {
        this.drawer.closeDrawer();
    }
}