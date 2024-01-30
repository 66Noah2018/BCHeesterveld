const infoBlockContent = {
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

const indexContentMapping = {
    "nieuwsbriefAug": "Nieuwsbrief-Heesterveld-augustus-2023.pdf",
    "asbestbrief": "Brief asbestonderzoek Heesterveld.pdf",
    "pollProblemenInDeWoning": "https://docs.google.com/forms/d/e/1FAIpQLSe2k-sO9k190wRiHH--72RWba99d7CFxkfdp7z2_FYgRYe1lQ/viewform?embedded=true",
    "technischeControle": "Brief technische opnames woningen.pdf",
    "technischeOpname": "Brief_aankondiging_technische_onderzoeken.pdf",
    "bewonersAvond2023": "Uitnodiging bewonersavond.pdf",
    "technischeOpnameReminder": "230908 Reminder2 brief technische opnames woningen Heesterveld.pdf"
};

const indexNeedsWarningBlockMapping = {
    "pollProblemenInDeWoning": false,
    "nieuwsbriefAug": true,
    "asbestbrief": false,
    "technischeControle": false,
    "technischeOpname": false,
    "bewonersAvond2023": false,
    "technischeOpnameReminder": false
}

const indexHeaderMapping = { // order is important here! Add newest at the top, this is used for the index page feed list
    "technischeOpnameReminder": "2e herinneringsbrief over de technische opnames van de woningen",
    "pollProblemenInDeWoning": "Poll: Welke problemen ervaar jij in je woning?",
    "nieuwsbriefAug": "Nieuwsbrief van Ymere (augustus 2023)",
    "asbestbrief": "Brief over het asbestonderzoek",
    "technischeControle": "Herinneringsbrief over de technische opnames van de woningen",
    "bewonersAvond2023": "Uitnodiging voor de bewonersavond februari 2023",
    "technischeOpname": "Brief over de technische opnames van de woningen"
}

const indexHighlightsMapping = {
    "nieuwsbriefAug": "<b>Voorlopige</b> plannen voor de buitenkant van de flats. O.a.: HR++ glas en een nieuw ontwerp voor de buitenkant van de flats\n<b>Voorlopige</b> plannen voor de binnenkant van de woningen. O.a.: op orde brengen/vervangen van sanitair en keukens en mechanische ventilatie\nNieuwe bewonerscommissie",
    "asbestbrief": "De firma Wouters gaat asbestonderzoek uitvoeren binnen de woningen\nDit is een wettelijke verplichting en houdt niet in dat er verwacht wordt dat er veel asbest wordt aangetroffen\nOnderzoeken starten in september",
    "pollProblemenInDeWoning": "Welke problemen ervaar jij in je woning en in de algemene ruimten?",
    "technischeOpnameReminder": "Reminder om een afspraak te plannen met Hemubo voor een technische opname van jouw woning\nJe bent <b>verplicht</b> om aan deze technische opname mee te werken\nDeze afspraken zijn nodig zodat de aannemer met de juiste informatie kan beginnen aan het groot onderhoud\nOverlast tijdens deze technische opname is minimaal", 
    "technischeControle": "Reminder om een afspraak te plannen met Hemubo voor een technische opname van jouw woning\nDeze afspraken zijn nodig zodat de aannemer met de juiste informatie kan beginnen aan het groot onderhoud\nOverlast tijdens deze technische opname is minimaal",
    "technischeOpname": "Hemubo neemt contact op met bewoners om een afspraak te plannen voor de technische opname van jouw woning\nDeze afspraken zijn nodig zodat de aannemer met de juiste informatie kan beginnen aan het groot onderhoud\nOverlast tijdens deze technische opname is minimaal",
    "bewonersAvond2023": "Uitnodiging voor de bewonersavond op 13 februari 2023\nInformatie over de uitvoering van de technische onderzoeken\nOprichten bewonerscommissie"
}

function processParameters(){
    const urlParams = new URL(window.location.href).searchParams;
    if (urlParams.toString() !== ""){
        const requestedContent = urlParams.get("requestedContent");
        const indexOfContent = Object.keys(indexHeaderMapping).indexOf(requestedContent);
        const contentCount = Object.keys(indexHeaderMapping).length;
        let newContent = "";
        if (indexOfContent !== 0) {
            const prevContentLink = "./index.html?requestedContent=" + Object.keys(indexHeaderMapping)[(indexOfContent-1)];
            newContent += `<div class='prev-content'><a class="fas fa-chevron-left fa-xl" href=${prevContentLink}></a></div>`;
        }
        newContent += "<div class='curr-content'>";

        if (requestedContent.startsWith("poll")){
            newContent += `<h1>${indexHeaderMapping[requestedContent]}</h1><p class="poll info">${indexHighlightsMapping[requestedContent]}</p><iframe src="${indexContentMapping[requestedContent]}" max-width="640" height="700" frameborder="0" marginheight="0" marginwidth="0"class="poll-form-iframe">Loading…</iframe>`;
        } else {
            newContent += `<h1>${indexHeaderMapping[requestedContent]}</h1>`;
            if (indexNeedsWarningBlockMapping[requestedContent]) {
                newContent += `<div class="warning-block"><b>Let op!</b> De informatie hieronder is <b>niet</b> definitief. De plannen voor het groot onderhoud kunnen dus nog wijzigen.</div>`;
            }
            newContent += `<ul class="highlights-list">`;
            const highlightsList = indexHighlightsMapping[requestedContent].split("\n");
            for (let highlight of highlightsList) { newContent += `<li>${highlight}</li>`; }
            newContent += `</ul><object data="./${indexContentMapping[requestedContent]}" type="application/pdf" class="brieven-docviewer"><p>Unable to display PDF file. <a href="./${indexContentMapping[requestedContent]}">Download</a> instead.</p></object>`;
        }
        newContent += "</div>";
        if (indexOfContent !== (contentCount - 1)){
            const nextContentLink = "./index.html?requestedContent=" + Object.keys(indexHeaderMapping)[(indexOfContent+1)];
            newContent += `<div class='next-content'><a class="fas fa-chevron-right fa-xl" href=${nextContentLink}></a></div>`;
        }
        document.getElementById("index-content").innerHTML = newContent;
    } else { // load feed list
        let feedlist = ``
        for (let key in indexHeaderMapping) { 
            const highlights = indexHighlightsMapping[key].replaceAll("\n", ". ");
            const highlightsShortString = highlights.split(" ").slice(0, 20).join(" ") + "...";
            feedlist += `<li onclick="location.href='./index.html?requestedContent=${key}'"><span class="label">${indexHeaderMapping[key]}</span><span class="second-label">${highlightsShortString}</span></li>`;
        }
        document.getElementById("index-feed").innerHTML = feedlist;
    }
}

function prepareLetterSelect(){
    let selectOptions = `<select data-role="select" id="letter-select" onchange="displayCorrectLetter()">`;
    for (let item in indexHeaderMapping){
        if (!item.startsWith("poll")){
            selectOptions += `<option value="${item}">${indexHeaderMapping[item]}</option>`;
        }
    }
    selectOptions += `</select>`;
    document.getElementById("select-div").innerHTML = selectOptions;
}

function displayCorrectLetter(){
    const requestedLetter = document.getElementById("letter-select").value;
    const letterCode = getLetterCode(requestedLetter);
    document.getElementById("letter-content").innerHTML = letterCode;
}

function getLetterCode(requestedContent){
    let letterCode = `<h2>${indexHeaderMapping[requestedContent]}</h2>`;
    if (indexNeedsWarningBlockMapping[requestedContent]) {
        letterCode += `<div class="warning-block"><b>Let op!</b> De informatie hieronder is <b>niet</b> definitief. De plannen voor het groot onderhoud kunnen dus nog wijzigen.</div>`
    }
    letterCode += `<ul class="highlights-list">`;
    const highlightsList = indexHighlightsMapping[requestedContent].split("\n");
    for (let highlight of highlightsList) { letterCode += `<li>${highlight}</li>`; }
    letterCode += `</ul><object data="./${indexContentMapping[requestedContent]}" type="application/pdf" class="brieven-docviewer"><p>Unable to display PDF file. <a href="./${indexContentMapping[requestedContent]}">Download</a> instead.</p></object>`;
    return letterCode;
}