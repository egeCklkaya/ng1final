import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Database, set, ref, update, onValue,remove } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, public database: Database) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
  registerRE(value: any) {

    set(ref(this.database, 'realestates/' + value.id), {
      name: value.name,
      floor: value.floor,
      id : value.id,
      size: value.size
    }); 
    alert('Emlak oluşturuldu.');

    const starCountRef = ref(this.database, 'realestates/' + value.id);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      alert(data.name);
    });

    update(ref(this.database, 'realestates/' + value.id), {
      name: value.name,
      floor: value.floor,
      id: value.id,
      size: value.size
    });
    alert('emlak güncellendi.');

    remove(ref(this.database, 'realestates/' + value.id));
    alert('removed');
  }
}