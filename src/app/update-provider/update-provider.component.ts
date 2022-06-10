import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProviderService } from '../services/provider.service';
@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {
  private id: any;
  private provider: any;
  public nom:any;
  public address:any;
  constructor(private serviceProvider: ProviderService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //1) récupération de l'id du provider à modifier
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );
    //2) récupération de l'objet provider avec cet id

    this.serviceProvider.getProviderById(this.id).subscribe(
      data => {
        this.provider = data;
        this.nom = this.provider.name;
        this.address = this.provider.address;
        //console.log(this.providerOld);
      }
    );
  }

  updateProvider(){

    this.provider= {
      "id":this.id,
      "name":this.nom,
      "address":this.address
    };

    this.serviceProvider.updateProvider(this.provider).subscribe(
      data=>
      {
        console.log(data);
        this.router.navigate(["/listProvider"]);
      }

    );
  }
}
