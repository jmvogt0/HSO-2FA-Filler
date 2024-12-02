function show(enabled, useSettingsInsteadOfPreferences) {
    if (useSettingsInsteadOfPreferences) {
        document.getElementsByClassName('state-on')[0].innerText = "HSO 2 Faktor Erweiterung ist aktuell aktiviert. Du kannst sie in den Einstellungen von Safari deaktivieren.";
        document.getElementsByClassName('state-off')[0].innerText = "HSO 2 Faktor Erweiterung ist aktuell deaktiviert. Du kannst sie in den Einstellungen von Safari aktivieren.";
        document.getElementsByClassName('state-unknown')[0].innerText = "Du kannst HSO 2 Faktor Erweiterung in den Einstellungen von Safari aktivieren.";
        document.getElementsByClassName('open-preferences')[0].innerText = "Beenden und Einstellungen von Safari öffnen";
    }

    if (typeof enabled === "boolean") {
        document.body.classList.toggle(`state-on`, enabled);
        document.body.classList.toggle(`state-off`, !enabled);
    } else {
        document.body.classList.remove(`state-on`);
        document.body.classList.remove(`state-off`);
    }
}

function openPreferences() {
    webkit.messageHandlers.controller.postMessage("open-preferences");
}

document.querySelector("button.open-preferences").addEventListener("click", openPreferences);
