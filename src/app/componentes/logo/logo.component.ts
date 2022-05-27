import { Component, OnInit } from '@angular/core';
/*import { PortfolioService} from 'src/app/servicios/portfolio.service';*/

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  /*miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }*/

  constructor(){}

  ngOnInit(): void {/*
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    })*/
  }

}
