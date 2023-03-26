import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  carouselItems: number[];
  cards: any[];
  activeTab: number = 0;
  cities: any[];
  logos: any[];

  /* contact form */
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    people: new FormControl('', Validators.required)
  });

  constructor() {
    this.carouselItems = [1, 2, 3, 4, 5];

    this.cards = [
      {
        link: 'https://ctfassets.imgix.net/vh7r69kgcki3/3j9aqbBpEAl7GYPX1CbAIo/6ee0f13d82cc6e1ad53b5affb75d30ab/Hot_Desks_274x274.png?auto=format%20compress&fit=crop&q=50&w=100&h=100',
        capacity: 'Más de 1',
        title: 'Membresía de coworking',
        subtitle: 'Hot desks, salas, cabinas telefónicas y más'
      },
      {
        link: 'https://ctfassets.imgix.net/vh7r69kgcki3/UXP1XHGUaziQtFAGuMCZx/e3b5a6c56456da4f290c18426eb84c1a/Private_Office_274x274.png?auto=format%20compress&fit=crop&q=50&w=100&h=100',
        capacity: '1-20+',
        title: 'Oficina Privada',
        subtitle: 'Oficinas listas con amenidades compartidas'
      },
      {
        link: 'https://ctfassets.imgix.net/vh7r69kgcki3/3UdjOaiPRb734SnJ8ApLUk/b9455393017cfe8916d722ea17b639e9/Office_Suite_1440x1440.png?auto=format%20compress&fit=crop&q=50&w=100&h=100',
        capacity: '20-100+',
        title: '',
        subtitle: ''
      },
      {
        link: 'https://ctfassets.imgix.net/vh7r69kgcki3/35qhYMr0wIJvd2o5MAuSHd/c45139bad5decb1cf980735f9f632a05/Meeting_Small_274x274.png?auto=format%20compress&fit=crop&q=50&w=100&h=100',
        capacity: '1-20',
        title: '',
        subtitle: ''
      }
    ];

    this.cities = ['Bogotá', 'Bucaramanga', 'Medellín'];

    this.logos = [
      'https://ctfassets.imgix.net/vh7r69kgcki3/6RWiW6nRjE0Opu3rMrmyNA/46e4a7a7cec8a942949693ef532f6012/logo_microsoft.png?auto=format%20compress&fit=crop&q=50&w=100',
      'https://ctfassets.imgix.net/vh7r69kgcki3/557AtRn8tgjcVnmrXM5dPK/c6cc549473c56a285007f57a57b4bd94/pfizer.png?auto=format%20compress&fit=crop&q=50&w=100',
      'https://ctfassets.imgix.net/vh7r69kgcki3/6ucfeSUkXAQhX3LvdjHaL4/53586fbd893593b8ce3b2c3904160cd9/samsung.png?auto=format%20compress&fit=crop&q=50&w=100',
      'https://ctfassets.imgix.net/vh7r69kgcki3/4UwH80gQwn4Bzsgsppp6oc/fb1ddac85d9a2724a124114933713917/Salesforce_logo.png?auto=format%20compress&fit=crop&q=50&w=100',
      'https://ctfassets.imgix.net/vh7r69kgcki3/3f7ZKaZZF7tSAQfCA7Zs8P/41ea5b9545b4f293661db6cf95c80d78/visa.png?auto=format%20compress&fit=crop&q=50&w=100',
      'https://ctfassets.imgix.net/vh7r69kgcki3/2UDkm4Ldvxo5l1cdbNrGXn/8d4b43b9e9dd33b966b94304a130dc32/zoom.png?auto=format%20compress&fit=crop&q=50&w=100'
    ]
  }
}
