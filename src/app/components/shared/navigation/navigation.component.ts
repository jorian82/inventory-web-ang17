import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {MaterialModule} from "../material.module";
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, RouterLink, NgForOf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit, OnDestroy{
  mobileQuery: MediaQueryList;
  menuNav = [
    { name: "Home", route: "home", icon: "home" },
    { name: "Categories", route: "category", icon: "category" },
    { name: "Products", route: "product", icon: "production_quantity_limits"}
  ];

  // _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    // this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery = media.matchMedia('(max-width: 650px)');
    // this.mobileQuery.addEventListener("change",this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
  }

}
