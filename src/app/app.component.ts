import { Component } from "@angular/core";
import { SettingsService } from "./settings.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myresult: any;
  name = "Display data from service";
  constructor(private service: SettingsService) {}

  ngOnInit() {
    this.service.getNewUserInfo().subscribe((result: any) => {
      this.myresult = result.PersonalInfolistModel;
      console.log(this.myresult);
    });
  }
}
