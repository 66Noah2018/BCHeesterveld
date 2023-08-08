infoBlockContent = {
    "informerenHuurders": "De corporatie informeert de huurders, de bewonerscommissie (indien aanwezig), de huurderskoepel en de gemeente over het startbesluit.",
    "oprichtenBC": "De corporatie en de huurderskoepel hebben een inspanningsverplichting om een bewonerscommissie op te richten in projecten waar het reguliere participatie proces van de Kaderafspraken van toepassing is. Als dit niet lukt wordt dit schriftelijk vastgelegd.",
    "geenCommissie": "Wanneer het niet lukt om een bewonerscommissie op te richten, wordt in overleg met de huurderskoepel, de betrokkenheid van bewoners op een andere manier georganiseerd. Er is in ons geval sprake van een bewonerscommissie, dit is daarom niet van toepassing op dit project.",
    "huurderskoepelInformeert": "De huurderskoepel informeert de bewonerscommissie over haar rechten en plichten vanuit de Kaderafspraken.",
    "faciliterenBC": "[Overlegwet] De corporatie faciliteert de bewonerscommissie bij het uitvoeren van haar taken die voortvloeien uit de Overlegwet",
    "bewonersondersteuner": "De bewonerscommissie heeft recht op professionele en onafhankelijke ondersteuning gedurende het proces. De bewonerscommissie kiest de bewonersondersteuner uit en formuleert de opdracht, in overleg met de corporatie. Wanneer de corporatie akkoord is met de opdracht, betaalt de corporatie voor de bewonersondersteuning. Wij worden ondersteund door een bewonersondersteuner van Stichting !WOON. Deze bewonersondersteuner is aanwezig bij zowel de overleggen binnen de bewonerscommissie zelf als met Ymere.",
    "participatieplan": "De corporatie maakt in overleg met de bewonerscommissie een participatieplan met daarin de afspraken over de samenwerking tijdens het project.", 
    "woonwensen": "De corporatie doet onderzoek naar de woonwensen van huurders, na overleg met de bewonerscommissie.",
    "informerenVoorkeurscenario": "[Overlegwet] De corporatie informeert de bewonerscommissie, de huurders en de huurderskoepel over het voorkeurscenario en onderbouwt (schriftelijk) de keuze voor dit scenario.",
    "overlegVoorkeurscenario": "De corporatie overlegt met de bewonerscommissie over het voorkeurscenario.",
    "advies": "[Overlegwet] De bewonerscommissie heeft de mogelijkheid om een advies uit te brengen over het voorkeurscenario. Dit gaan wij doen op basis van input van onze huurders, hoe we dit precies gaan aanpakken is op dit moment nog niet geheel duidelijk.",
    "overlegProjectplan": "De corporatie stelt een projectplan op en overlegt hierover met de bewonerscommissie. Een projectplan bestaat uit een sociaal plan en een ontwerpplan. Het sociaal plan bevat afspraken over o.a. de uitvoering van de werkzaamheden en de mogelijkheden voor huurders in specifieke situaties. Het ontwerpplan bevat informatie over het onderhoud dat uitgevoerd gaat worden.",
    "adviesaanvraagProjectplan": "[Overlegwet] De corporatie informeert de bewonerscommissie over het projectplan (dat bestaat uit het sociaal plan en het ontwerpplan). De corporatie vraagt om een advies over het projectplan aan de bewonerscommissie.",
    "bewonersraadpleging": "De bewonerscommissie houdt binnen de 6 weken van de adviestermijn een bewonersraadpleging over het projectplan. De bewonerscommissie kiest daarvoor in overleg met de corporatie een derde, deskundige partij. Wanneer de bewonerscommissie de bewonersraadpleging niet op zich neemt, kan de corporatie het initiatief hiertoe overnemen. De uitkomsten van de bewonersraadpleging worden aan het advies toegevoegd.",
    "adviesProjectplan": "De bewonerscommissie geeft de corporatie, binnen 6 weken nadat ze geïnformeerd is, een advies over het projectplan.",
    "reactieAdvies": "[Overlegwet] De corporatie geeft binnen 2 weken een schriftelijke reactie op het advies van de bewonerscommissie.",
    "aanvraagPeildatum": "De corporatie kan de peildatum aanvragen na het geven van de schriftelijke reactie op het advies. De peildatum is de datum waarop de corporatie mag beginnen met het uitvoeren van het projectplan.",
    "peildatum": "De gemeente geeft binnen 6 weken de peildatum af. De peildatum is de datum waarop de corporatie mag beginnen met het uitvoeren van het projectplan.",
    "renovatievoorstel": "[Huurrecht] De corporatie doet een renovatievoorstel aan elke huurder. Wanneer 70% of meer van de huurders instemt met het voorstel wordt het voorstel redelijk geacht.",
    "uitvoering": "De corporatie start met de uitvoering van het groot onderhoud conform het projectplan."
}

function showInfoBlock(location){
    event.preventDefault();
    document.getElementById("infoblock").style.display = "block";
    document.getElementById("infoblock-content").innerText = infoBlockContent[location];
}

function hideInfoblock(){ document.getElementById("infoblock").style.display = "none"; }