import { getActiveTabURL } from "./utils.js";

// Selectores de botones
const bigBio = document.querySelector("#big-bio-btn");
const colorIcon = document.querySelector("#color-icon-btn");
const autoRose = document.querySelector("#auto-rose-btn");
const autoGold = document.querySelector("#auto-gold-btn");
const autoLootbox = document.querySelector("#auto-lootbox-btn");
const levelClan = document.querySelector("#level-clan-btn");
const refreshStatsBtn = document.querySelector("#refresh-stats-btn");

// Event listeners para funcionalidades
if (bigBio) {
    bigBio.addEventListener("click", async () => {
        const activeTab = await getActiveTabURL();
        chrome.tabs.sendMessage(activeTab.id, {
            type: "BIGBIO",
        });
    });
}

if (colorIcon) {
    colorIcon.addEventListener("click", async () => {
        const activeTab = await getActiveTabURL();
        chrome.tabs.sendMessage(activeTab.id, {
            type: "COLORICON",
        });
    });
}

if (autoRose) {
    autoRose.addEventListener("click", async () => {
        const activeTab = await getActiveTabURL();
        chrome.tabs.sendMessage(activeTab.id, {
            type: "AUTOROSE",
        });
    });
}

if (autoGold) {
    autoGold.addEventListener("click", async () => {
        const activeTab = await getActiveTabURL();
        chrome.tabs.sendMessage(activeTab.id, {
            type: "AUTOGOLD",
        });
    });
}

if (autoLootbox) {
    autoLootbox.addEventListener("click", async () => {
        const activeTab = await getActiveTabURL();
        chrome.tabs.sendMessage(activeTab.id, {
            type: "AUTOLOOTBOX",
        });
    });
}

if (levelClan) {
    levelClan.addEventListener("click", async () => {
        const activeTab = await getActiveTabURL();
        chrome.tabs.sendMessage(activeTab.id, {
            type: "LEVELCLAN",
        });
    });
}

// Event listener para Refresh Stats
if (refreshStatsBtn) {
    refreshStatsBtn.addEventListener("click", async () => {
        const activeTab = await getActiveTabURL();
        
        // Agregar animación de carga
        refreshStatsBtn.classList.add("loading");
        
        // Enviar mensaje al contentScript para actualizar stats
        chrome.tabs.sendMessage(activeTab.id, {
            type: "REFRESHSTATS",
        });
        
        // Recargar datos después de 1.5 segundos
        setTimeout(() => {
            loadPlayerData();
            refreshStatsBtn.classList.remove("loading");
        }, 1500);
    });
}

// Función para llenar la información
const fillInfor = (dataUser = []) => {
    if (dataUser.length > 0) {
        document.getElementById("id-info").innerHTML = " " + dataUser[0].ID;
        document.getElementById("username-info").innerHTML = " " + dataUser[0].USERNAME;
        document.getElementById("level-info").innerHTML = " " + dataUser[0].LEVEL;
        document.getElementById("total-exp-info").innerHTML = " " + dataUser[0].TOTALEXP;
        document.getElementById("gold-info").innerHTML = " " + dataUser[0].GOLD;
        document.getElementById("rose-info").innerHTML = " " + dataUser[0].ROSE;
        document.getElementById("lootbox-info").innerHTML = " " + dataUser[0].LOOTBOX;
    }
};

// Función para cargar datos del jugador
function loadPlayerData() {
    chrome.storage.sync.get("dataUser", (data) => {
        const dataUser = data.dataUser ? JSON.parse(data.dataUser) : [];
        fillInfor(dataUser);
    });
}

// Cargar información cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getActiveTabURL();
    
    if (activeTab.url.includes("wolvesville.com")) {
        console.log("This extension is working!");
        loadPlayerData();
    } else {
        const container = document.getElementsByClassName("container")[0];
        container.innerHTML = '<h1 class="title"> This is not wolvesville page. Navigate to wolvesville.com to start using the extension</h1>';
        container.style.display = "block";
        document.querySelector('.mod-menu-container').style.display = "none";
    }
});