import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';
@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

  constructor(private serviceProvider: ProviderService, private router:Router) { }

  ngOnInit(): void {
  }

  addProvider(myForm: any) {
    //alert(myForm.value.nom+" "+myForm.value.address);

    let provider = {
      "name": myForm.value.nom,
      "address": myForm.value.address
    }

    this.serviceProvider.addProvider(provider).subscribe(
      data =>
      this.router.navigate(["/listProvider"])

    );
  }
}
