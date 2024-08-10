import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { MainTitleComponent } from "../main-title/main-title.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MainTitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  @ViewChildren("demo") allImages!: QueryList<ElementRef>
  @ViewChild("myLayer")layer!: ElementRef;
  @ViewChild("bgImage") changeImage!: ElementRef;
  ngAfterViewInit(): void {
        this.allImages.forEach(element => {
      // console.log(element.nativeElement);
      element.nativeElement.addEventListener("click", (ele:any) => {
        let srcClicked = element.nativeElement.getAttribute("src")
        console.log(srcClicked);
        // change img src layer
        this.changeImage.nativeElement.setAttribute("src", srcClicked);
        // remove display none
        this.layer.nativeElement.classList.remove("d-none");
        // clicked.layer
        this.layer.nativeElement.addEventListener("click", (ele: any) => {
          // console.log(ele.target);
          if (ele.target == this.layer.nativeElement) {
            this.closeButton()
          }
        })
      })
    });
    // close button when press esc key
    document.addEventListener("keydown", (e) => {
      if (this.layer.nativeElement.classList.contains("d-none") == false) {
        if (e.code == "Escape") {
          this.closeButton()
        }
      }
    })
  }
  closeButton() {
    this.layer.nativeElement.classList.add("d-none")
  }
}
