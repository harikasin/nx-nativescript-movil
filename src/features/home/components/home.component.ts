import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef, ElementRef } from "@angular/core";
import { Drawer } from "@nativescript-community/ui-drawer";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    drawer: Drawer;

    @ViewChild("drawer", { static: true }) drawerElementRef: ElementRef;

    constructor(private router: RouterExtensions) {}


    goBack(): void {
        this.router.back();
    }

    ngOnInit(): void {
        this.drawer = this.drawerElementRef.nativeElement;
    }

    onOpenDrawer() {
        this.drawer.open();
    }

    onCloseDrawer() {
        this.drawer.close();
    }
}