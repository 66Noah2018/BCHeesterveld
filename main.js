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
  const existingScript = document.querySelector(`script[src="${src}"]`);

  if (existingScript) {
    return Promise.resolve(existingScript);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");

    script.src = src;
    script.async = true;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Could not load: ${src}`));

    document.head.appendChild(script);
  });
}

function getCookie(){
    return document.cookie.split("; ").find((row) => row.startsWith("bcheesterveld="))?.split("=")[1];
} // returns null if it doesn't exist, else none, all or functional

function cookieConsent(){
    let chosenCookieOption = getCookie();

    if (!chosenCookieOption) {
    const modalContainer = document.createElement("div");

    modalContainer.innerHTML = `
        <div
        class="modal fade"
        id="cookieConsentModal"
        tabindex="-1"
        aria-labelledby="cookieConsentTitle"
        aria-describedby="cookieConsentDescription"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title fs-5" id="cookieConsentTitle">
                Deze website gebruikt cookies
                </h2>
            </div>
            <div class="modal-body" id="cookieConsentDescription">
                Om embedded Instagram-berichten weer te geven en het gebruik van
                onze website te monitoren gebruiken wij cookies. Wij plaatsen geen
                cookies zonder expliciete toestemming.
            </div>
            <div class="modal-footer flex-column align-items-stretch gap-2">
                <button type="button" class="btn btn-outline-secondary" id="cookieFunctional">
                Enkel functionele cookies
                </button>
                <button type="button" class="btn btn-primary" id="cookieAll">
                Alles toestaan
                </button>
            </div>
            </div>
        </div>
        </div>`;

    const modalElement = modalContainer.firstElementChild;
    document.body.appendChild(modalElement);

    const cookieModal = new bootstrap.Modal(modalElement, {
        backdrop: "static",
        keyboard: false
    });

    document.getElementById("cookieFunctional").addEventListener("click", () => {
        processConsent("functional");
        cookieModal.hide();
    });

    document.getElementById("cookieAll").addEventListener("click", () => {
        processConsent("all");
        cookieModal.hide();
    });

    cookieModal.show();
    } else {
    processConsent(chosenCookieOption);
    }
}

function processConsent(consent) {
  if (consent !== "functional" && consent !== "all") {
    return;
  }

  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

  document.cookie = [
    `bcheesterveld=${encodeURIComponent(consent)}`,
    `expires=${expires.toUTCString()}`,
    "path=/",
    "SameSite=Lax",
    location.protocol === "https:" ? "Secure" : ""
  ].filter(Boolean).join("; ");

  if (consent !== "all") {
    return;
  }

  // Google Analytics
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", "G-BC6RZHGQ18");

  loadScript("https://www.googletagmanager.com/gtag/js?id=G-BC6RZHGQ18")
    .catch(error => console.error("Google Analytics could not load:", error));

  // Instagram embeds
  loadScript("https://www.instagram.com/embed.js")
    .then(() => {
      if (window.instgrm?.Embeds) {
        window.instgrm.Embeds.process();
      }
    })
    .catch(error => console.error("Instagram embed script could not load:", error));
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
    document.getElementById("infoblock").style.display = "flex";
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
    }

    document.getElementById("letter-select").value = requestedContent
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
    let selectOptions = `<select class="form-select" id="letter-select" onchange="displayCorrectLetter()">`;
    
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
        displayCorrectLetter()
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

function getFeed(newsletterList, org){
    let feedlist = `<h3>Updates van ${capitalizeFirstLetter(org)}</h3>`

    if (newsletterList.length > 0){
        for (const item of newsletterList.reverse()){
            const highlights = item.bulletpoints.replaceAll("\n", ". ")
            const highlightsShortString = highlights.split(" ").slice(0, 20).join(" ") + "...";
            const link = "./Newsletters.html?org=" + org + "&requestedContent=" + item.id
            feedlist += `
                <a href='${link}' class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${item.header}</h5>
                    </div>
                    <p class="mb-1">${highlightsShortString}</p>
                </a>
            `
        }
    } else {
        feedlist += `
            <a class="list-group-item"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">Nog geen items</h5></div><p class="mb-1">Kijk later nog eens</p></a>`;
    }
    
    return feedlist
}

function loadFeeds(){
    let hemuboFeed = getFeed(getNewsletterList("hemubo"), "hemubo")
    let ymereFeed = getFeed(getNewsletterList("ymere"), "ymere")

    document.getElementById("feed-hemubo").innerHTML = hemuboFeed
    document.getElementById("feed-ymere").innerHTML = ymereFeed
}

function initWorksCarousel() {
  const AUTOPLAY_INTERVAL = 4000;

  const wrapper    = document.getElementById("worksCarousel");
  const track      = document.getElementById("worksTrack");
  const dotsEl     = document.getElementById("worksDots");
  const prevBtn    = document.getElementById("worksPrev");
  const nextBtn    = document.getElementById("worksNext");
  const pauseBadge = document.getElementById("worksPausedBadge");
  const header = document.getElementById("header-carousel")
  const container = document.getElementById("carousel-container")
  const isSingle = carouselData.length === 1;
    
  let current = 0;
  let paused  = false;
  let timer   = null;

    // if no items, hide header too
    if (carouselData.length == 0){
        header.style.display = "none"
        container.style.display = "none"
        return
    }

  // Build slides and dots
  carouselData.forEach((item, i) => {
    const slide = document.createElement("div");
    slide.className = "works-slide" + (i === 0 ? " active-slide" : "");
    slide.dataset.index = i;

    const impactsHtml = item.impacts.map(impact => {
    const emoji = impactEmoji[impact.emojiKey] ?? impactEmoji.generalNotice;

    return `
        <span class="works-impact-badge">
        <span class="badge-emoji" aria-hidden="true">${emoji}</span>
        <span>${impact.text}</span>
        </span>`;
    }).join("");

    const weeksHtml = item.weeks.map(w =>
      `<span class="works-week-pill">${w}</span>`
    ).join("");

    slide.innerHTML = `
      <div class="works-slide-inner">
        <p class="works-slide-title">${item.title}</p>
        <p class="works-slide-desc">${item.description}</p>
        <div class="works-impacts">${impactsHtml}</div>
        <div class="works-slide-weeks">
          <span class="week-label">📅 Gedurende:</span>
          ${weeksHtml}
        </div>
      </div>`;

    track.appendChild(slide);

    if (!isSingle) {
        const dot = document.createElement("button");
        dot.className = "works-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.dataset.index = i;
        dotsEl.appendChild(dot);
    }
  });

  if (isSingle) {
    wrapper.classList.add("single-slide");
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    dotsEl.style.display  = "none";
    return; // skip all timer, event, and navigation logic
    }

  const slides = track.querySelectorAll(".works-slide");
  const dots   = dotsEl.querySelectorAll(".works-dot");

  function goTo(index, resumeAfter = false) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active-slide", i === current));
    dots.forEach((d, i)   => d.classList.toggle("active", i === current));
    track.style.transform = `translateX(-${slides[0].getBoundingClientRect().width * current}px)`;
    if (resumeAfter) resume();
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => { if (!paused) goTo(current + 1); }, AUTOPLAY_INTERVAL);
  }

  function pause() {
    paused = true;
    pauseBadge.classList.add("visible");
  }

  function resume() {
    paused = false;
    pauseBadge.classList.remove("visible");
    startTimer();
  }

  slides.forEach(slide => {
    slide.addEventListener("click", () => {
      const idx = parseInt(slide.dataset.index);
      if (idx !== current) { goTo(idx); pause(); }
      else { paused ? resume() : pause(); }
    });
  });

  prevBtn.addEventListener("click", () => goTo(current - 1, true));
  nextBtn.addEventListener("click", () => goTo(current + 1, true));
  dots.forEach(dot => dot.addEventListener("click", () => goTo(parseInt(dot.dataset.index), true)));

  goTo(0);
  startTimer();
}