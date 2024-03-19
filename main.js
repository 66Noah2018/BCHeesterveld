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
    "technischeControle2": "230908 Reminder2 brief technische opnames woningen Heesterveld.pdf",
    "updateSLA": '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/C189bIOL38w/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/C189bIOL38w/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/C189bIOL38w/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by bureau SLA - we are architects (@bureausla)</a></p></div></blockquote> <script async src="http://www.instagram.com/embed.js"></script><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/C2O--oFoNyh/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/C2O--oFoNyh/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/C2O--oFoNyh/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by bureau SLA - we are architects (@bureausla)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>'
};

const indexNeedsWarningBlockMapping = {
    "pollProblemenInDeWoning": false,
    "nieuwsbriefAug": true,
    "asbestbrief": false,
    "technischeControle": false,
    "technischeOpname": false,
    "bewonersAvond2023": false,
    "technischeControle2": false,
    "updateSLA": true
}

const indexHeaderMapping = { // order is important here! Add newest at the top, this is used for the index page feed list
    "updateSLA": "Impressie van concept ontwerp Heesterveld - Bureau SLA",
    "technischeControle2": "REMINDER: Technische controles",
    "pollProblemenInDeWoning": "Poll: Welke problemen ervaar jij in je woning?",
    "nieuwsbriefAug": "Nieuwsbrief van Ymere (augustus 2023)",
    "asbestbrief": "Brief over het asbestonderzoek",
    "technischeControle": "Herinneringsbrief over de technische opnames van de woningen",
    "bewonersAvond2023": "Uitnodiging voor de bewonersavond februari 2023",
    "technischeOpname": "Brief over de technische opnames van de woningen"
}

const indexHighlightsMapping = {
    "technischeControle2": "REMINDER: Je bent verplicht mee te werken aan een technische controle van je woning. Wanneer Hemubo nog niet langs is geweest bij jouw woning en je daarvoor nog geen afspraak hebt, neem contact op met Hemubo",
    "nieuwsbriefAug": "<b>Voorlopige</b> plannen voor de buitenkant van de flats. O.a.: HR++ glas en een nieuw ontwerp voor de buitenkant van de flats\n<b>Voorlopige</b> plannen voor de binnenkant van de woningen. O.a.: op orde brengen/vervangen van sanitair en keukens en mechanische ventilatie\nNieuwe bewonerscommissie",
    "asbestbrief": "De firma Wouters gaat asbestonderzoek uitvoeren binnen de woningen\nDit is een wettelijke verplichting en houdt niet in dat er verwacht wordt dat er veel asbest wordt aangetroffen\nOnderzoeken starten in september",
    "pollProblemenInDeWoning": "Welke problemen ervaar jij in je woning en in de algemene ruimten?",
    "technischeControle": "Reminder om een afspraak te plannen met Hemubo voor een technische opname van jouw woning\nDeze afspraken zijn nodig zodat de aannemer met de juiste informatie kan beginnen aan het groot onderhoud\nOverlast tijdens deze technische opname is minimaal",
    "technischeOpname": "Hemubo neemt contact op met bewoners om een afspraak te plannen voor de technische opname van jouw woning\nDeze afspraken zijn nodig zodat de aannemer met de juiste informatie kan beginnen aan het groot onderhoud\nOverlast tijdens deze technische opname is minimaal",
    "bewonersAvond2023": "Uitnodiging voor de bewonersavond op 13 februari 2023\nInformatie over de uitvoering van de technische onderzoeken\nOprichten bewonerscommissie",
    "updateSLA": "Architectenbureau SLA is ingeschakeld door Ymere voor het ontwerpen van Heesterveld 3.0. Met Heesterveld 3.0 wordt gedoeld op Heesterveld na de renovatie\nBureau SLA heeft impressies van het concept ontwerp en informatie over de tegels op de gevels gepost op hun Instagram"
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
        } else if (requestedContent?.includes("SLA")){
            newContent += `<h1>${indexHeaderMapping[requestedContent]}</h1>`;
            if (indexNeedsWarningBlockMapping[requestedContent]){
                newContent += `<div class="warning-block"><b>Let op!</b> De informatie hieronder is <b>niet</b> definitief. De plannen voor het groot onderhoud kunnen dus nog wijzigen.</div>`;
            }
            newContent += `<ul class="highlights-list">`;
            const highlightsList = indexHighlightsMapping[requestedContent].split("\n");
            for (let highlight of highlightsList) { newContent += `<li>${highlight}</li>`; }
            newContent += "</ul>" + indexContentMapping[requestedContent]
        }
        else {
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
        window.instgrm.Embeds.process();
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