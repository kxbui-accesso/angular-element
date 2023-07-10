import { Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss', './app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {

  @Input()
  set setDisplay(value: any) {
    this.display = true;
  }

  @Output()
  toParent = new EventEmitter()

  display = false;

  constructor(private router: Router, private elementRef: ElementRef) {
    (elementRef.nativeElement as any).setDisplay = this.setDisplay
    this.router.navigate(['/'], { skipLocationChange: true });
  }

  onClick() {
    this.toParent.emit('hey');
  }
}
