import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-be-added-page',
  standalone: false,
  templateUrl: './to-be-added-page.component.html',
  styleUrl: './to-be-added-page.component.scss',
})
export class ToBeAddedPageComponent implements OnInit, OnDestroy {
  title: string = '';
  sub!: Subscription;
  constructor(private route: ActivatedRoute) {}
  ngOnDestroy(): void {
    if (!!this.sub) {
      this.sub.unsubscribe();
    }
  }
  ngOnInit() {
    this.sub = this.route.data.subscribe((v: any) => {
      this.title = v.title;
    });
  }
}
