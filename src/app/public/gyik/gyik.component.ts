import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-gyik',
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './gyik.component.html',
  styleUrl: './gyik.component.scss',
})
export class GyikComponent {
  gyikList = [
    {
      question: 'Hogyan találhatok szakembert az oldalon?',
      answer:
        'Egyszerűen írd be a keresőbe, milyen szakemberre van szükséged, illetve mely településen – mi megmutatjuk a legközelebbi elérhető szakembereket.',
    },
    {
      question: 'Milyen típusú szakemberek érhetők el a platformon?',
      answer:
        'Nálunk minden kategóriában találsz szakembereket: villanyszerelők, vízvezetékszerelők, burkolók, festők, takarítók és még sokan mások.',
    },
    {
      question:
        'Hogyan vehetem fel a kapcsolatot egy kiválasztott szakemberrel?',
      answer:
        'Ha regisztrálsz és bejelentkezel, akkor a számodra szimpatikus szakember kkiválasztása után a profiljánál automatikusan listázza az elérhetőségeit is!',
    },
    {
      question: 'Ingyenes a szakember keresése és megkeresése?',
      answer:
        'Igen, a keresés és a kapcsolatfelvétel teljesen ingyenes a megrendelők számára. Mindössze annyit kell tenned, hogy regisztrálsz az oldalon.',
    },
    {
      question: 'Hogyan értékelhetem a szakember munkáját?',
      answer:
        'A munka elvégzése után lehetőséged véleményt írni komment formájában a szakember oldalán.',
    },
    {
      question: 'Mi történik, ha nem vagyok elégedett a szakemberrel?',
      answer:
        'Írhatsz negatív véleményt is, illetve a Kapcsolat menüpont alatt az oldal üzemeltetőivel is fel tudod venni a kapcsoltot.',
    },
    {
      question: 'Hogyan működik az időpontfoglalás / ajánlatkérés?',
      answer:
        'Bejelentkezést követően keress rá a szükséges szakemberre, válaszd ki aki a leginkább szimpatikus, majd az adatlapján elérhető módokon (email és/vagy telefonszám) tudod felvenni vele a kapcsolatot.',
    },
    {
      question: 'Biztonságos az adataim kezelése a weboldalon?',
      answer:
        'Igen, adatvédelmi irányelveink szigorúak, és megfelelnek az európai GDPR szabályozásnak.',
    },
    {
      question: 'Hogyan regisztrálhatok szakemberként?',
      answer:
        'A regisztrációnál kattints a "Szakember vagyok" tabra és az adatok kitöltésével máris neki láthatsz az ügyfélszerzésnek.',
    },
    {
      question: 'Mennyibe kerül a szolgáltatás használata szakembereknek?',
      answer: 'Az oldal használata teljesen ingyenes.',
    },
    {
      question: 'Hogyan kapok megrendeléseket a platformon?',
      answer:
        'A megrendelők közvetlenül megkeresnek a profilodon keresztül vagy az általad megadott szolgáltatási kör alapján. Ha pedig szimpatikusnak találnak, fel fognak keresni a megadott elérhetőségeid valamelyikén.',
    },
    {
      question: 'Hogyan frissíthetem az adataimat vagy szolgáltatásaimat?',
      answer:
        'Bejelentkezés után a Profil oldalon módosíthatod az adataid, fotókat, árakat, szolgáltatásokat.',
    },
    {
      question: 'Mi történik, ha egy ügyfél nem fizet vagy lemondja a munkát?',
      answer:
        'Az oldal ugyan nem közvetít anyagi oldalon, azonban azt javasoljuk, minden részletet egyeztessetek a munka folyamatok megkezdése előtt aláírt szerződésben.',
    },
    {
      question: 'Hogyan vehetem fel a kapcsolatot az ügyfélszolgálattal?',
      answer:
        'A "Kapcsolat" menüpontnál van lehetőség felvenni velünk a kapcsolatot.',
    },
  ];
}
