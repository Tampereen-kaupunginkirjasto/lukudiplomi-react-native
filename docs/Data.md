# Data

Data-tiedostot ovat historiallisista syistä kustomoidussa formaatissa. Tarkoitus on, että jatkossa kustomoitu formaatti jää pois ja siirrytään käyttämään JSON-muotoa.

## Formaatti

Formaatti on seuraavanlainen:

```
[Tietueen nimi] {
	[ensimmäisen-kentän-avain]:Ensimmäisen kentän sisältö|
	[toisen-kentän-avain]:Toisen kentän sisältö|
	[kolmannen-kentän-avain]:Kolmannen kentän sisältö|
    ... jne.
}
```

Eli:

- Ensin hakasulkeissa _tietueen nimi_
- Sitten aaltosulkeet, joiden sisälle tulee lohkon varsinainen sisältö

Sisältö koostuu useasta eri kentästä ja kentän sisällöstä seuraavasti:

- Hakasulkeet, joiden sisällä on kentän nimi
- Hakasulkeiden jälkeen tulee kaksoispiste
- Kaksoispisteen jälkeen kentän sisältö
- Kentän sisällön päättää putkimerkki

## Asetukset

Asetustiedosto sisältää sovelluksessa valittavana olevien luokka-asteiden asetukset. Tiedosto voi sisältää yhden tai useampia alla olevan esimerkin kaltaisia lohkoja. Lohkojen formaatti tai muotoilu on kuvattu yllä, otsikon "Formaatti" alla.

### Esimerkki

```
[7. luokka] {
	[date]:2018.12.20|
	[books]:https://www.example.com/lukudiplomi/kirjat/7-luokka-kirjat.txt|
	[tasks]:https://www.example.com/lukudiplomi/tehtavat/7-luokka-tehtavat.txt|
}
```

### Esimerkin läpikäynti

Tietueen nimi:

- 7. luokka

Kentät:

- date: päivityspäivämäärä; ei käytössä tällä hetkellä
- books: osoite, josta sovellus hakee kyseisen luokka-asteen kirjalistan
- tasks: osoite, josta sovellus hakee kyseisen luokka-asteen tehtävälistan

## Kirjat

Kirjatiedosto sisältää kirjojen tiedot samankaltaisina lohkoina, kuin edellä kuvatun asetustiedoston tiedot.

### Esimerkki

```
[Tuntematon sotilas] {
	[b-aut]:Linna, Väinö|
	[b-cov]:https://www.example.com/tuntematon-sotilas.jpg|
	[b-tag]:sotakirjallisuus, romaani|
	[b-des]:Teoksen kuvausteksti.|
	[b-ava]:https://www.example.com/saatavuus-tiedot|
	[b-ser-1]:https://www.example.com/sarjan-muun-osan/saatavuus-tiedot|
	[b-ser-1-t]:Sarjan muun osan otsaketeksti, jos sellainen on.|
}
```

### Esimerkin läpikäynti

Tietueen nimi:

- Tuntematon sotilas.

Koska kyseessä on kirja-tietue, tietueen nimenä on kirjan nimi.

Kentät:

- b-aut: kirjan kirjoittaja (engl. author)
- b-cov: linkki kirjan kansikuvaan
- b-tag: lista kirjaan liittyvistä tageista, käytännössä kategoria; erotetaan pilkulla, jos useampia
- b-des: kuvausteksti kirjasta, voi olla pidempikin teksti
- b-ava: linkki saatavuustietoihin
- b-ser-1 ja b-ser-1-t: jos on jokin kirjasarja, niin ensimmäinen on linkki kirjasarjan saatavuustietoihin ja jälkimmäinen otsaketeksti; näitä voi olla useampia, muista vaihtaa vain numero, eli ensimmäinen on `b-ser-1`, toinen `b-ser-2`, jne.

## Tehtävät

Tehtävät on esitetty samanmuotoisina lohkoina kuin tämän dokumentin alussa on kuvattu.

### Esimerkki

```
[0] {
	[num]:1|
	[type]:self|
	[task]:Kirjoita samaa tyyliä tavoitellen yksi uusi luku ja sovita se kirjan loppuun.|
}
```

### Esimerkin läpikäynti

Hakasulkeissa ensin numerointi - tehtävien indeksointi - nollasta alkava. Tässä esimerkissä ensimmäinen tehtävä ja sen indeksointi alkaa nollasta.

Kentät:

- num: tehtävän numero, ykkösestä alkava numerointi
- type: tehtävän tyyppi, onko kyseessä yksin vai ryhmätyönä; arvot: self, group
- task: tehtävän kuvaus vapaana tekstinä
