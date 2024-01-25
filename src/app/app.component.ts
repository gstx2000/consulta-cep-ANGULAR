
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router) {}

  clickCount = 0;
  title = 'Consulta de CEP';

  refresh(): void {
    window.location.reload();
  }

  incrementClickCount() {
    this.clickCount++;
  }

  async shareContent() {
    const shareData: ShareData = {
      title: 'Link',
      text: 'Compartilhamento',
      url: 'https://www.consultacep.com',
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        alert('Compartilhamento não suportado pelo navegador.');
      }
    } catch (error) {
      alert('Erro ao compartilhar:');
    }
  }

  navCepLs(){
    this.router.navigate(['', 'ls' ])
  }
  navCepApi() {
    this.router.navigate(['', 'api' ])
  }

}
