import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders:string = environment.urlProvider;

  constructor(private http:HttpClient) { }

  getProviders(){
    return this.http.get(this.urlProviders);
  }

  deleteProvider(provider:any)
  {
    return this.http.delete(this.urlProviders+provider.id);
  }
  addProvider(provider:any)
  {
    return this.http.post(this.urlProviders,provider);
  }

  getProviderById(providerId:any)
  {
    return this.http.get(this.urlProviders+providerId);
  }

  updateProvider(provider:any)
  {
    return this.http.put(this.urlProviders+provider["id"],provider);
  }


}
