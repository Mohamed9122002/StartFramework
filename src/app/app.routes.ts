import { Routes } from "@angular/router";
import { AboutComponent } from "./layout/pages/about/about.component";

import { ContactComponent } from "./layout/pages/contact/contact.component";
import { PortfolioComponent } from "./layout/pages/portfolio/portfolio.component";
import { HomeComponent } from "./layout/pages/home/home.component";
import { NotFoundComponent } from "./layout/additions/not-found/not-found.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, title: "Home" },
  { path: "about", component: AboutComponent, title: "About" },
  { path: "portfolio", component: PortfolioComponent, title: "Portfolio" },
  { path: "contact", component: ContactComponent, title: "contact" },
  {
    path: "**",
    component: NotFoundComponent,
    title: "Not Found"
  }
];
//  {
//   path:"**", title:"Not found"
//  }
