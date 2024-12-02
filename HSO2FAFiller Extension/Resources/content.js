if (window.location.href.includes("https://2fa.cit.hs-offenburg.de/osp/a/TOP/auth/app/contractcontinue")) {
    let element = document.getElementById("nffc");
    if (element) {
        console.log('Element gefunden:', element);
        element.type="text"
        element.autocomplete="one-time-code"
        element.style.border="2px solid #34B233"
        element.placeholder="Bestätigungscode"
    } else {
        console.log('Element nicht gefunden');
    }
}
