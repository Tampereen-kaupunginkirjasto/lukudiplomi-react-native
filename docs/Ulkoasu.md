# Ulkoasu

Sovelluksen ulkoasun muokkaaminen (mm. värien muuttaminen).

Ulkoasun värejä voi muuttaa `src/Styles.js`-tiedostosta. Tiedoston yläosassa on `Colors`-objekti, jossa on määritelty käytetyt värit.

`Colors`-objektin alla on `Styles`-objekti, jonka määrittämiä tyylejä on käytetty muissa `.js`-tiedostoissa.

`Styles`-objektin sisältämissä tyyleissä on viitattu `Colors`-objektissa määriteltyihin väreihin.

Värien avaimet eivät ole (tällä hetkellä) kovin hyvin nimetty, mutta katsomalla, missä niitä on `Styles`-objektin sisällä käytetty, saa käsitystä siitä, mihin niitä on käyttöliittymässä käytetty. Jatkossa avaimet voisi nimetä kuvaavammin, jotta koodin lukeminen ja siitä käsityksen saaminen olisi helpompaa. 