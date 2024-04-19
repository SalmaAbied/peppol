import React from 'react';
import { useTranslation } from 'react-i18next';

function Voorwaarden() {
  const { t } = useTranslation();

  return (
    <>
      <div className='justify-center my-20'>
        <h2 className="text-4xl md:text-5xl font-bold text-center">{t('Voorwaarden.algemeneVoorwaardenTitle')}</h2>
        <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-legoAzure block mt-4 mb-6" />
      </div>
      <div className='container mx-auto mb-20'>
        <div className='container mx-auto'>
          <h1 className="text-3xl font-bold mb-5">{t('Voorwaarden.algemeneVoorwaardenHeader')}</h1>

          <div className='pt-5'>
            <h2 className="text-xl font-bold mb-3">{t('Voorwaarden.artikel1Title')}</h2>
            <p>{t('Voorwaarden.artikel1Content1')}</p>
            <p>{t('Voorwaarden.artikel1Content2')}</p>
            <p>{t('Voorwaarden.artikel1Content3')}</p>
          </div>

          <div className='pt-5'>
            <h2 className="text-xl font-bold mb-3">{t('Voorwaarden.artikel2Title')}</h2>
            <p>{t('Voorwaarden.artikel2Content1')}</p>
            <p>{t('Voorwaarden.artikel2Content2')}</p>
            <p>{t('Voorwaarden.artikel2Content3')}</p>
          </div>

          <div className='pt-5'>
            <h2 className="text-xl font-bold mb-3">{t('Voorwaarden.artikel3Title')}</h2>
            <p>{t('Voorwaarden.artikel3Content1')}</p>
          </div>

          <div className='pt-5'>
            <h2 className="text-xl font-bold mb-3">{t('Voorwaarden.artikel4Title')}</h2>
            <p>{t('Voorwaarden.artikel4Content1')}</p>
            <p>{t('Voorwaarden.artikel4Content2')}</p>
            <p>{t('Voorwaarden.artikel4Content3')}</p>
            <p>{t('Voorwaarden.artikel4Content4')}</p>
            <p>{t('Voorwaarden.artikel4Content5')}</p>
          </div>

          <div className='pt-5'>
            <h2 className="text-xl font-bold mb-3">{t('Voorwaarden.artikel5Title')}</h2>
            <p>{t('Voorwaarden.artikel5Content1')}</p>
            <p>{t('Voorwaarden.artikel5Content2')}</p>
            <p>{t('Voorwaarden.artikel5Content3')}</p>
          </div>

          <div className='pt-5'>
            <h2 className="text-xl font-bold mb-3">{t('Voorwaarden.artikel6Title')}</h2>
            <p>{t('Voorwaarden.artikel6Content1')}</p>
            <p>{t('Voorwaarden.artikel6Content2')}</p>
          </div>

          <div className='pt-5'>
            <h2 className="text-xl font-bold mb-3">{t('Voorwaarden.artikel7Title')}</h2>
            <p>{t('Voorwaarden.artikel7Content1')}</p>
            <p>{t('Voorwaarden.artikel7Content2')}</p>
          </div>

          <div className='pt-5'>
            <h2 className="text-xl font-bold mb-3">{t('Voorwaarden.artikel8Title')}</h2>
            <p>{t('Voorwaarden.artikel8Content1')}</p>
            <p>{t('Voorwaarden.artikel8Content2')}</p>
            <p>{t('Voorwaarden.artikel8Content3')}</p>
            <p>{t('Voorwaarden.artikel8Content4')}</p>
          </div>

          <div className='pt-5'>
            <h2 className="text-xl font-bold mb-3">{t('Voorwaarden.artikel9Title')}</h2>
            <p>{t('Voorwaarden.artikel9Content1')}</p>
            <p>{t('Voorwaarden.artikel9Content2')}</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Voorwaarden;
// import React from 'react'

// function Voorwaarden() {
//   return (
//    <>
//    <div className='justify-center my-20'>
//       <h2 className="text-4xl md:text-5xl font-bold text-center">Algemene voorwaarden</h2>
//       <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-legoAzure block mt-4 mb-6" />
//     </div>
//     <div className='container mx-auto mb-20'>
//     <div className='container mx-auto'>
//   <h1 className="text-3xl font-bold mb-5">Algemene Voorwaarden</h1>

//   <div className='pt-5'>
//     <h2 className="text-xl font-bold mb-3">Artikel 1 - Algemene bepalingen</h2>
//     <p>1.1 Deze algemene voorwaarden zijn van toepassing op de levering van diensten alsook op de verkoop van goederen door Qastan, als commerciële naam voor FIT BV en al haar rechtsopvolgers. Afwijkingen op deze algemene voorwaarden zijn slechts geldig indien deze uitdrukkelijk én schriftelijk aanvaard en bevestigd werden door Qastan. In alle andere gevallen blijven de bepalingen, zoals hieronder gesteld, onverminderd van toepassing op alle aanbiedingen, voorstellen, offertes, bestellingen, overeenkomsten, dienstprestaties en leveringen van goederen en diensten.</p>
//     <p>Bij afwezigheid van een speciale schriftelijke overeenkomst, en alleen in de mate van de daarin beschreven uitzondering, worden alle leveringen, aanbiedingen en overeenkomsten uitgevoerd volgens de hierna gemelde voorwaarden.</p>
//     <p>1.2 De klant erkent door het plaatsen van een bestelling, het akkoord gaan met een offerte of akkoord voor uitvoering onvoorwaardelijk en onherroepelijk deze Algemene Voorwaarden. De klant erkent zo steeds uitdrukkelijk aan voorafgaandelijk aan de overeenkomst kennis te hebben genomen van deze voorwaarden.</p>
//   </div>

//   <div className='pt-5'>
//     <h2 className="text-xl font-bold mb-3">Artikel 2 - Aanbiedingen en bestellingen</h2>
//     <p>2.1 Al onze prijzen zijn exclusief BTW en eventuele, in het kader van de overeenkomst te maken kosten, waaronder verzend- en administratiekosten. Wanneer een prijsofferte ondertekend wordt door de klant of aanvaard wordt, wordt een volledige en rechtsgeldige overeenkomst geacht tot stand te zijn gekomen inclusief aanvaarding van huidige voorwaarden. Pas na deze ondertekening en in voorkomend geval na betaling van een voorschot dient Qastan tot uitvoering van de offerte over te gaan.</p>
//     <p>2.2 Voor zover evenwel, in de periode tussen offertes en aanvaarding, de prijzen van één of meerdere onderdelen door de leverancier van Qastan zouden worden verhoogd, is Qastan niet meer gehouden door de prijzen in de offerte, en kan naar keuze en zonder vergoedingen, hetzij de offerte worden geannuleerd hetzij in verhouding tot de prijsstijgingen van de materialen worden aangepast. Dit is tevens geen geldige grond tot verbreking, ontbinding of opschorting van de uitvoering van de overeenkomst door de klant, noch kan dit aanleiding geven tot enige prijsvermindering of schadevergoeding.</p>
//     <p>2.3 Qastan houdt zich het recht voor de bestelde goederen in samenstelling en materiaalgebruik te wijzigen teneinde nuttige verbeteringen aan te brengen. De klant verbindt zich ertoe bij de bestellingen alle noodzakelijke informatie ter uitvoering der werken of levering der goederen te verlenen, bij gebreke waaraan hij zich niet kan beroepen op gebreken dewelke zouden voortspruiten uit het niet verstrekken van deze informatie.</p>
//   </div>

//   <div className='pt-5'>
//     <h2 className="text-xl font-bold mb-3">Artikel 3 - Leveringstermijnen</h2>
//     <p>3.1 Onze aanbiedingen worden gedaan zonder verbintenis wat de leverings- en uitvoeringsdata betreft, die steeds bij benadering worden opgegeven. Vertragingen wettigen geenszins het annuleren van de bestelling, de uitvoering, het verbreken van de overeenkomst, een prijsvermindering of enige eis tot schadevergoeding.</p>
//   </div>

//   <div className='pt-5'>
//     <h2 className="text-xl font-bold mb-3">Artikel 4 - Betalingsvoorwaarden en eigendomsvoorbehoud</h2>
//     <p>4.1 Alle facturen zijn steeds betaalbaar op het adres van de maatschappelijke zetel, op vervaldag en op het rekeningnummer zoals vermeld op de factuur. Behoudens anders overeengekomen in de bijzondere voorwaarden, zijn facturen steeds betaalbaar op 30 dagen na factuurdatum.</p>
//     <p>4.2 Iedere factuur die onbetaald blijft op de vastgestelde vervaldag wordt, van rechtswege en zonder ingebrekestelling, vermeerderd met een intrest van 1% per maand tot volledige betaling. De schadevergoeding ingevolge wanbetaling – in geval van niet-betaling op vervaldag - zal tevens verhoogd worden met een forfaitaire en onverminderde schadevergoeding van 15% en dit met een minimum van €100.</p>
//     <p>4.3 Zolang de geleverde goederen niet volledig betaald zijn – eventueel verhoogd met de interesten en schadevergoeding - blijven zij eigendom van de Qastan. De risico’s, die de goederen kunnen lopen, vallen evenwel ten laste van de koper zodra deze ter zijnen beschikking worden gesteld. In het geval van software laat dit de eigenaar, zijnde Qastan, toe om de toegang tot de software te ontzeggen.</p>
//     <p>4.4 Elk bezwaar moet geschieden binnen de 8 dagen na factuurdatum per gemotiveerd schrijven. Bij gebrek aan bewaar binnen de gestelde termijn, wordt de factuur geacht te zijn aanvaard. In elk geval kan het bedrag van de opgeschorte betaling enkel betrekking hebben op dat deel van de geleverde goederen of diensten dat direct betrekking heft op de beweerde niet-nakoming van de contractuele verplichting.</p>
//     <p>4.5 Afhankelijk van de uit te voeren opdracht, kan voor de aanvang één of meerdere voorschotten gevraagd worden. Voorschotten worden na afloop van de opdracht steeds in mindering gebracht met de eindafrekening.</p>
//   </div>

//   <div className='pt-5'>
//     <h2 className="text-xl font-bold mb-3">Artikel 5 - Geheimhouding en privacy</h2>
//     <p>5.1 De partijen zullen alle informatie – zowel mondeling als schriftelijk verkregen – en waarvan redelijkerwijze geacht wordt dat dit vertrouwelijk is, strikt vertrouwelijk behandelen.</p>
//     <p>5.2 Persoonsgebonden data worden enkel voor contractuele, financiële of administratieve doeleinden gebruikt, allen in het kader van facturatie, financiële verwerking of opvolging. Voor de specifieke GDPR en privacy-bepalingen, zie onze website inzake privacy policy.</p>
//     <p>5.3 Behoudens uitdrukkelijks anders overeengekomen, behoudt Qastan zich het recht om de klant als referentie te gebruiken voor commerciële doeleinden.</p>
//   </div>

//   <div className='pt-5'>
//     <h2 className="text-xl font-bold mb-3">Artikel 6 - Plichten van de klant</h2>
//     <p>6.1 De partijen stellen tijdig alle informatie en documenten, noodzakelijk voor de goede uitvoering van de opdracht, ter beschikking van Qastan.</p>
//     <p>6.2 De klant zorgt er tevens voor dat zijn hardware voldoet aan alle minimumvereisten die nodig zijn voor de software-producten van Qastan. Bij het nalaten om de hardware en infrastructuur (incl. stabiel netwerk) aan te passen aan de minimumvereisten, kan Qastan niet aansprakelijk noch verantwoordelijk gesteld worden voor eventuele gebreken (zoals snelheidsverlies,…) efficiëntie-verlies of het niet correct werken van het softwareproduct.</p>
//   </div>

//   <div className='pt-5'>
//     <h2 className="text-xl font-bold mb-3">Artikel 7 - Aansprakelijkheid</h2>
//     <p>7.1 Qastan is niet gehouden en kan niet aansprakelijk gesteld worden voor contractuele verplichtingen waarvan de uitvoering door overmacht onmogelijk geworden is.</p>
//     <p>7.2 In geen geval kan Qastan aansprakelijk gesteld worden voor indirecte schade, daaronder begrepen gevolgschade, gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie of verlies van gegevens, ongeacht of deze voortvloeit uit de niet-naleving van haar verplichtingen. Voor het overige is de aansprakelijk beperkt tot de som gelijk aan het bedrag dat verschuldigd zou zijn voor de geleverde goederen en/of diensten en met een maximum van 5.000 EUR.</p>
//   </div>

//   <div className='pt-5'>
//     <h2 className="text-xl font-bold mb-3">Artikel 8 - Software</h2>
//     <p>8.1 Onverminderd alle andere bepalingen, hetzij algemene, hetzij bijzondere, gelden de hier navolgende voorwaarden terzake van levering van software, voor zover zij van de voormelde voorwaarden afwijken.</p>
//     <p>8.2 Software door Qastan ontwikkeld, geniet een waarborgperiode van 2 maanden, binnen welke periode gebeurlijke programmatiefouten, met uitsluiting van fouten in analyse of in prestaties ten gevolge van een specifiek aanvullend verzoek door de klant, door Qastan gratis worden hersteld. De waarborgperiode gaat in vanaf de finale implementatie of het versturen van de eindfactuur voor de specifieke opdracht.</p>
//     <p>8.3 Buiten de voormelde periode worden de herstellings- of verbeteringskosten, zonder voorafgaandelijke bijkomende overeenkomst, op basis van prijs in regie aangerekend. In geen enkel geval kan de verkoper aansprakelijk worden gesteld voor het verlies van de inhoud (hetzij software zelf, hetzij gegevens) van de informatiedragers, zelfs indien dit verlies zich zou voordoen tijdens een interventie door de leverancier. De klant zal zelf zorgen voor de nodige back-ups teneinde ieder verlies aan informatie door herstelling te vermijden. Qastan is op geen enkele wijze aansprakelijk voor enige schade of aanspraken ten gevolge van welk danig rechtmatig hetzij wederrechtelijk gebruik van de programma’s. De klant vrijwaart Qastan op de meeste algemene wijze voor alle weldanige aanspraken en rechten van derden, hetzij op grond van licenties, octrooien of enige andere rechten voortspruitende rechtstreeks of onrechtstreeks uit het specifieke gebruik door de koper van de programma’s. Behoudens uitdrukkelijke en schriftelijke toelating uitgaande van Qastan is het aan de koper in elk geval verboden om de software door de verkoper ontwikkeld, hetzij door de leverancier van Qastan, te dupliceren, noch voor eigen gebruik, noch voor gebruik door derden.</p>
//     <p>8.4 Verzoeken die niet in de offerte of bijgevoegde technische beschrijving opgenomen werden, worden als aanvullend verzoek gezien en zullen op basis van onze geldende uurprijs extra aangerekend worden.</p>
//   </div>

//   <div className='pt-5'>
//     <h2 className="text-xl font-bold mb-3">Artikel 9 - Betwistingen en ontbinding</h2>
//     <p>9.1 Wanneer de klant nalaat om een verbintenis uit te voeren, heeft Qastan het recht om ofwel de gedwongen uitvoering te eisen met toepassingen van huidige algemene voorwaarden, ofwel om de overeenkomst van rechtswege en zonder ingebrekestelling ontbonden te verklaren. Dit wordt steeds schriftelijk meegegeven. In dit laatste geval zal de klant gehouden zijn tot betaling van hetgeen reeds geleverd en uitgevoerd werd, en bovendien tot vergoeding van al onze schade, met een absoluut forfaitair minimum van 30% van de overeengekomen prijs inclusief BTW, of minstens het maximale wettelijk toegelaten.</p>
//     <p>9.2 Op al onze contracten leveringen en werken, is enkel het Belgisch recht van toepassing. Alle betwistingen vallen onder de uitsluitende bevoegdheid van de rechtbanken van het arrondissement Kortrijk.</p>
//   </div>
// </div>

//     </div>
//    </>
//   )
// }

// export default Voorwaarden
