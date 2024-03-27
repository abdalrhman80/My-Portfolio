import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, AfterViewInit {
  @ViewChild('loaderLayer') loaderLayer!: ElementRef;
  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      this.loaderLayer.nativeElement.classList.add('d-none');
    }, 1000)
  }
}
