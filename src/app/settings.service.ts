import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SettingsService {
  // public snippet: any;

  constructor(private config: ConfigService, private http: HttpClient) {}

  getNewUserInfo() {
    return this.config.getData();
    // this.snippet = data;
    // });
  }
}
