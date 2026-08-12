class newsletter {
    constructor(id, header, bulletpoints, content, needsInfoBlock, type){
        this.id = id
        this.header = header
        this.bulletpoints = bulletpoints
        this.content = content
        this.needsInfoBlock = needsInfoBlock
        this.type = type
    }

    get getId(){
        return parseInt(this.id)
    }
}

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        var s;
        s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}

function getCookie(){
    return document.cookie.split("; ").find((row) => row.startsWith("bcheesterveld="))?.split("=")[1];
} // returns null if it doesn't exist, else none, all or functional

function cookieConsent(){
    let chosenCookieOption = getCookie();
    console.log(chosenCookieOption)
    if (!chosenCookieOption) {
        Metro.dialog.create({
            title: "Deze website gebruikt cookies",
            content: "Om embedded instagram posts weer te geven en het gebruik van onze website te monitoren gebruiken wij cookies. Wij plaatsen geen cookies zonder expliciete toestemming",
            overlayClickClose: false,
            actions: [
                {
                    caption: "Enkel functionele cookies",
                    cls: "js-dialog-close",
                    onclick: function(){
                        processConsent("functional");
                    }
                },
                {
                    caption: "Alles toestaan",
                    cls: "js-dialog-close",
                    onclick: function(){
                        processConsent("all");
                    }
                }
            ]
        })
    } 
    else {
        processConsent(chosenCookieOption)
    }
}

function processConsent(consent){
    if (consent != "none"){ // none means not even 'store decision' cookie
        // update cookie
        const d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000)); // store for one year
        let expires = "expires="+ d.toUTCString();
        document.cookie = "bcheesterveld=" + consent + ";" + expires + ";path=/";
        if (consent == "all"){
            // insta ding
            //<script async src="https://www.instagram.com/embed.js"></script>
            loadScript("https://www.instagram.com/embed.js").catch(loadScript.bind(null)).then();

            // <script async src="https://www.googletagmanager.com/gtag/js?id=G-BC6RZHGQ18"></script>
            //     <script>
            //     window.dataLayer = window.dataLayer || [];
            //     function gtag(){dataLayer.push(arguments);}
            //     gtag('js', new Date());

            //     gtag('config', 'G-BC6RZHGQ18');
            // </script>
            loadScript("https://www.googletagmanager.com/gtag/js?id=G-BC6RZHGQ18").catch(loadScript.bind(null)).then();
            let script = document.createElement("script")
            script.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-BC6RZHGQ18');"
            document.head.appendChild(script)
        }
    }
}

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


function showContent(requestedContent = null){
    const [org, contentId] = retrieveUrlParams()
    if (contentId){
        requestedContent = contentId
        // empty out the params to avoid accidental overrides
        const url = new URL(window.location.href);
        url.searchParams.delete('requestedContent');
        history.pushState(null, '', url);
    }

    if (org != "" && requestedContent != ""){
        const letter = getNewsletterById(requestedContent)
        let newContent = ""
        
        if (letter.getId > 1) {
            const prevContentLink = "./Newsletters.html?org=" + org + "&requestedContent=" + 
            (letter.getId - 1);
            newContent += `<div class='prev-content'><a class="fas fa-chevron-left fa-xl" href=${prevContentLink}></a></div>`;
        }
        newContent += "<div class='curr-content'>";

        if (letter.type == "poll"){
            newContent += `<h1>${letter.header}</h1><p class="poll info">${letter.bulletpoints}</p><iframe src="${letter.content}" max-width="640" height="700" frameborder="0" marginheight="0" marginwidth="0"class="poll-form-iframe">Loading…</iframe>`;
        } else if (letter.type == "instagram"){
            newContent += `<h1>${letter.header}</h1>`;
            if (letter.needsInfoBlock){
                newContent += `<div class="warning-block"><b>Let op!</b> De informatie hieronder is <b>niet</b> definitief. De plannen voor het groot onderhoud kunnen dus nog wijzigen.</div>`;
            }
            newContent += `<ul class="highlights-list">`;
            const highlightsList = letter.bulletpoints.split("\n");
            for (let highlight of highlightsList) { newContent += `<li>${highlight}</li>`; }
            newContent += "</ul>" + letter.content
        }
        else if (letter.type == "text") {
            newContent += `<h1>${letter.header}</h1>`;
            if (letter.needsInfoBlock){
                newContent += `<div class="warning-block"><b>Let op!</b> De informatie hieronder is <b>niet</b> definitief. De plannen voor het groot onderhoud kunnen dus nog wijzigen.</div>`;
            }
            newContent += letter.content;
        }
        else if (letter.type == "pdf") {
            newContent += `<h1>${letter.header}</h1>`;
            if (letter.needsInfoBlock) {
                newContent += `<div class="warning-block"><b>Let op!</b> De informatie hieronder is <b>niet</b> definitief. De plannen voor het groot onderhoud kunnen dus nog wijzigen.</div>`;
            }
            newContent += `<ul class="highlights-list">`;
            const highlightsList = letter.bulletpoints.split("\n");
            for (let highlight of highlightsList) { newContent += `<li>${highlight}</li>`; }
            newContent += `</ul><object data="./${resolveContentLocation(letter.content)}" type="application/pdf" class="brieven-docviewer"><p>Unable to display PDF file. <a href="./${resolveContentLocation(letter.content)}">Download</a> instead.</p></object>`;
        }
        else { console.log("unknown type: " + letter.type)}

        newContent += "</div>";

        if (letter.getId !== (getNewsletterList().length - 1)){
            const nextContentLink = "./Newsletters.html?org=" + org + "&requestedContent=" + (letter.getId + 1);
            newContent += `<div class='next-content'><a class="fas fa-chevron-right fa-xl" href=${nextContentLink}></a></div>`;
        }

        document.getElementById("letter-content").innerHTML = newContent;
        try{
            window.instgrm.Embeds.process();
        }
        catch(err){}
    // } else { // load feed list
    //     let feedlist = ``
    //     for (let key in indexHeaderMapping) { 
    //         const highlights = indexHighlightsMapping[key].replaceAll("\n", ". ");
    //         const highlightsShortString = highlights.split(" ").slice(0, 20).join(" ") + "...";
    //         feedlist += `<li onclick="location.href='./index.html?requestedContent=${key}'"><span class="label">${indexHeaderMapping[key]}</span><span class="second-label">${highlightsShortString}</span></li>`;
    //     }
    //     document.getElementById("index-feed").innerHTML = feedlist;
    }
}

function retrieveUrlParams(){
    const urlParams = new URL(window.location.href).searchParams;
    org = urlParams.get("org")
    requestedContent = urlParams.get("requestedContent")
    return [org, requestedContent]
}

function showNoNewsletters(){
    document.getElementById("select-div").display = "none"
    document.getElementById("letter-content").innerHTML = `
    <h2>Geen nieuwsbrieven beschikbaar</h2>
    <p>Het is mogelijk dat er nog geen nieuwsbrieven beschikbaar zijn.</p>
    <p>Zou hier wel iets moeten staan, maar zie je het niet? Neem dan contact op met de BC.</p>
    `
}

function prepareLetterSelect(){
    let selectOptions = `<select data-role="select" id="letter-select" onchange="displayCorrectLetter()">`;
    
    const newsletterList = getNewsletterList()

    if (newsletterList.length == 0){
        // backup option
        showNoNewsletters()
    } else {
        for (const item of newsletterList){
            selectOptions += `<option value="${item.id}">${item.header}</option>`;
        }

        selectOptions += `</select>`;
        document.getElementById("select-div").innerHTML = selectOptions;
    }
}

function displayCorrectLetter(){
    const requestedLetter = document.getElementById("letter-select").value;

    const letterCode = showContent(requestedLetter);
    // document.getElementById("letter-content").innerHTML = letterCode;
}

function getNewsletterList(reqOrg=undefined) {
    let org = undefined
    try{
        org = retrieveUrlParams()[0].toLowerCase()
    } catch {
        org = reqOrg
    }
    
    if (org == "ymere"){ return YMERE }   
    else if (org =="hemubo") { return HEMUBO }
    else { return [] }
}

function resolveContentLocation(fileName) {
    const org = retrieveUrlParams()[0].toLowerCase()
    if (org == "ymere"){ return FOLDER_YMERE + fileName }   
    else{ return FOLDER_HEMUBO + fileName }
}

function getNewsletterById(id) {
    let newsletterList = getNewsletterList()
    return newsletterList.find(newsletter => newsletter.getId === parseInt(id)) || null;
}

function getLetterCode(requestedContent){
    const letter = getNewsletterById(requestedContent)

    let letterCode = `<h2>${letter.header}</h2>`;
    if (letter.needsInfoBlock) {
        letterCode += `<div class="warning-block"><b>Let op!</b> De informatie hieronder is <b>niet</b> definitief. De plannen voor het groot onderhoud kunnen dus nog wijzigen.</div>`
    }
    letterCode += `<ul class="highlights-list">`;
    const highlightsList = letter.bulletpoints.split("\n");
    for (let highlight of highlightsList) { letterCode += `<li>${highlight}</li>`; }
    letterCode += `</ul><object data="./${resolveContentLocation(letter.content)}" type="application/pdf" class="brieven-docviewer"><p>Unable to display PDF file. <a href="./${resolveContentLocation(letter.content)}">Download</a> instead.</p></object>`;
    return letterCode;
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


function loadCarousel(){
    // TODO
}

function getFeed(newsletterList, org){
    let feedlist = `<h3>Updates van ${capitalizeFirstLetter(org)}</h3>`

    if (newsletterList.length > 0){
        for (const item of newsletterList.reverse()){
            const highlights = item.bulletpoints.replaceAll("\n", ". ")
            const highlightsShortString = highlights.split(" ").slice(0, 20).join(" ") + "...";
            const link = "./Newsletters.html?org=" + org + "&requestedContent=" + item.id
            feedlist += `<li onclick="location.href='${link}'"><span class="label">${item.header}</span><span class="second-label">${highlightsShortString}</span></li>`;
        }
    } else {
        feedlist += `<li><span class="label">Nog geen items</span><span class="second-label">Kijk later nog eens</span></li>`;
    }
    
    return feedlist
}

function loadFeeds(){
    let hemuboFeed = getFeed(getNewsletterList("hemubo"), "hemubo")
    let ymereFeed = getFeed(getNewsletterList("ymere"), "ymere")

    document.getElementById("feed-hemubo").innerHTML = hemuboFeed
    document.getElementById("feed-ymere").innerHTML = ymereFeed
}