import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';
@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  constructor(private serviceProvider: ProviderService, private router: Router) { }

  providers: any;
  ngOnInit(): void {

    this.refreshListProviders();
  }
  refreshListProviders() {
    this.serviceProvider.getProviders().subscribe(
      data => {
        this.providers = data;
      }
    );
  }
  deleteProvider(provider: any) {
    console.log(provider);
    this.serviceProvider.deleteProvider(provider).subscribe(
      data => {
        this.refreshListProviders();
      }
    );
  }

  updateProvider(provider: any) {

    this.router.navigate(['updateProvider' + '/' + provider['id']]);
  }

}
