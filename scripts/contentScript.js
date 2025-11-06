var _0x48ac = ["log", "LOAD", "BIGBIO", "COLORICON", "AUTOROSE", "Auto rose wheeling! ", "Done", "reload", "AUTOGOLD", "Auto gold wheeling! ", "AUTOLOOTBOX", "LEVELCLAN", "addListener", "onMessage", "runtime", "authtokens", "getItem", "\"", "split", "web", "en", "PUT", "application/json", "Bearer ", "stringify", "https://core.api-wolvesville.com/players/meAndCheckAppVersion", "json", "id", "player", "xpTotal", "level", "username", "GET", "", "https://core.api-wolvesville.com/inventory?", "silverCount", "roseCount", "length", "lootBoxes", "contentScript.js", "time", "sort", "set", "sync", "storage", "Change a big bio! ", "https://core.api-wolvesville.com/players/personalMsg", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "status", "then", "Your bio is long now !!!!", "Auto set color profile icon! ", "https://core.api-wolvesville.com/equippedItems/profileIcon", "#424242", "Done!!", "POST", "https://core.api-wolvesville.com/rewards/goldenWheelSpin", "charAt", "getTime", " ", "400", "Your gold wheeling is limited!", "https://core.api-wolvesville.com/rewards/wheelRewardWithSecret/", "Auto lootboxes opening! ", "https://core.api-wolvesville.com/inventory/lootBoxes/", "You don't have any lootbox to open!", "Opened ", " lootboxes! ", "Change a level clan! ", "Input the level u want to set(1-2147483647): ", "prompt", "https://core.api-wolvesville.com/clans/edit", "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ", "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ", "VN", "font-awesome-5:kiwi-bird:solid", "#FFFFFF", "JOIN_BY_REQUEST"];

(() => {
    let _0x224fx1 = [];
    
    const _0x224fx2 = _0x224fx3 => {
        return new Promise(_0x224fx4 => {
            return setTimeout(_0x224fx4, _0x224fx3);
        });
    };

    // Función principal para actualizar datos del jugador
    async function _0x224fxa() {
        let _0x224fxb = localStorage[_0x48ac[16]](_0x48ac[15]).toString();
        let _0x224fxc = _0x224fxb[_0x48ac[18]](_0x48ac[17])[3];
        let _0x224fxd = {
            versionNumber: 1,
            platform: _0x48ac[19],
            locale: _0x48ac[20]
        };
        let _0x224fxe = {
            method: _0x48ac[21],
            headers: {
                "content-Type": _0x48ac[22],
                Authorization: _0x48ac[23] + _0x224fxc
            },
            body: JSON[_0x48ac[24]](_0x224fxd)
        };
        const _0x224fx8 = await fetch(_0x48ac[25], _0x224fxe);
        const _0x224fxf = await _0x224fx8[_0x48ac[26]]();
        const _0x224fx10 = await _0x224fxf[_0x48ac[28]][_0x48ac[27]];
        const _0x224fx11 = await _0x224fxf[_0x48ac[28]][_0x48ac[29]];
        const _0x224fx12 = await _0x224fxf[_0x48ac[28]][_0x48ac[30]];
        const _0x224fx13 = await _0x224fxf[_0x48ac[28]][_0x48ac[31]];
        let _0x224fx14 = {
            method: _0x48ac[32],
            headers: {
                Accept: _0x48ac[22],
                "Content-Type": _0x48ac[22],
                Authorization: _0x48ac[23] + _0x224fxc,
                "Cf-JWT": _0x48ac[33],
                ids: 0x1
            }
        };
        const _0x224fx15 = await fetch(_0x48ac[34], _0x224fx14);
        const _0x224fx16 = await _0x224fx15[_0x48ac[26]]();
        const _0x224fx17 = await _0x224fx16[_0x48ac[35]];
        const _0x224fx18 = await _0x224fx16[_0x48ac[36]];
        const _0x224fx19 = await _0x224fx16[_0x48ac[38]][_0x48ac[37]];
        const _0x224fx1a = new Date();
        const _0x224fx1b = {
            ID: _0x224fx10,
            TOTALEXP: _0x224fx11,
            LEVEL: _0x224fx12,
            USERNAME: _0x224fx13,
            GOLD: _0x224fx17,
            ROSE: _0x224fx18,
            LOOTBOX: _0x224fx19,
            TIME: _0x224fx1a,
            fromfile: _0x48ac[39]
        };
        chrome[_0x48ac[44]][_0x48ac[43]][_0x48ac[42]]({
            dataUser: JSON[_0x48ac[24]]([..._0x224fx1, _0x224fx1b][_0x48ac[41]]((_0x224fx1c, _0x224fx1d) => {
                return _0x224fx1c[_0x48ac[40]] - _0x224fx1d[_0x48ac[40]];
            }))
        });
    }

    // Auto-actualizar cada 5 segundos
    var _0x224fx5 = setInterval(async function () {
        _0x224fxa();
    }, 5000);

    // Listener de mensajes
    chrome[_0x48ac[14]][_0x48ac[13]][_0x48ac[12]](async (_0x224fx6, _0x224fx7, _0x224fx8) => {
        const {
            type,
            value
        } = _0x224fx6;
        console[_0x48ac[0]](_0x224fx6);
        
        if (type === _0x48ac[1]) {
            // LOAD
        } else if (type === _0x48ac[2]) {
            _0x224fx1e(); // BIGBIO
        } else if (type === _0x48ac[3]) {
            _0x224fx20(); // COLORICON
        } else if (type === _0x48ac[4]) {
            // AUTOROSE
            alert(_0x48ac[5]);
            for (let _0x224fx9 = 0; _0x224fx9 < 30; _0x224fx9++) {
                _0x224fx21();
                await _0x224fx2(1000);
            }
            alert(_0x48ac[6]);
            location[_0x48ac[7]]();
        } else if (type === _0x48ac[8]) {
            alert(_0x48ac[9]); // AUTOGOLD
        } else if (type === _0x48ac[10]) {
            _0x224fx25(); // AUTOLOOTBOX
        } else if (type === _0x48ac[11]) {
            _0x224fx27(); // LEVELCLAN
        } else if (type === "REFRESHSTATS") {
            // NUEVO: Forzar actualización inmediata
            await _0x224fxa();
            console.log("Stats refreshed!");
        }
    });

    function _0x224fx1e() {
        alert(_0x48ac[45]);
        let _0x224fx1f = _0x48ac[46];
        let _0x224fxb = localStorage[_0x48ac[16]](_0x48ac[15]).toString();
        let _0x224fxc = _0x224fxb[_0x48ac[18]](_0x48ac[17])[3];
        let _0x224fxd = {
            msg: _0x48ac[47]
        };
        let _0x224fxe = {
            method: _0x48ac[21],
            headers: {
                "content-Type": _0x48ac[22],
                Authorization: _0x48ac[23] + _0x224fxc
            },
            body: JSON[_0x48ac[24]](_0x224fxd)
        };
        fetch(_0x224fx1f, _0x224fxe)[_0x48ac[49]](_0x224fx8 => {
            return console[_0x48ac[0]](_0x224fx8[_0x48ac[48]]);
        });
        alert(_0x48ac[50]);
        location[_0x48ac[7]]();
    }

    function _0x224fx20() {
        alert(_0x48ac[51]);
        let _0x224fx1f = _0x48ac[52];
        let _0x224fxb = localStorage[_0x48ac[16]](_0x48ac[15]).toString();
        let _0x224fxc = _0x224fxb[_0x48ac[18]](_0x48ac[17])[3];
        let _0x224fxd = {
            color: _0x48ac[53]
        };
        let _0x224fxe = {
            method: _0x48ac[21],
            headers: {
                "content-Type": _0x48ac[22],
                Authorization: _0x48ac[23] + _0x224fxc
            },
            body: JSON[_0x48ac[24]](_0x224fxd)
        };
        fetch(_0x224fx1f, _0x224fxe)[_0x48ac[49]](_0x224fx8 => {
            return console[_0x48ac[0]](_0x224fx8[_0x48ac[48]]);
        });
        alert(_0x48ac[54]);
        location[_0x48ac[7]]();
    }

    async function _0x224fx21() {
        let _0x224fxb = localStorage[_0x48ac[16]](_0x48ac[15]).toString();
        let _0x224fxc = _0x224fxb[_0x48ac[18]](_0x48ac[17])[3];
        let _0x224fxe = {
            method: _0x48ac[55],
            headers: {
                Accept: _0x48ac[22],
                "Content-Type": _0x48ac[22],
                Authorization: _0x48ac[23] + _0x224fxc,
                "Cf-JWT": _0x48ac[33],
                ids: 0x1
            }
        };
        fetch(_0x48ac[56], _0x224fxe)[_0x48ac[49]](_0x224fx8 => {
            console[_0x48ac[0]](_0x224fx8[_0x48ac[48]]);
        });
    }

    async function _0x224fx25() {
        alert(_0x48ac[63]);
        let _0x224fxb = localStorage[_0x48ac[16]](_0x48ac[15]).toString();
        let _0x224fxc = _0x224fxb[_0x48ac[18]](_0x48ac[17])[3];
        let _0x224fx14 = {
            method: _0x48ac[32],
            headers: {
                Accept: _0x48ac[22],
                "Content-Type": _0x48ac[22],
                Authorization: _0x48ac[23] + _0x224fxc,
                "Cf-JWT": _0x48ac[33],
                ids: 0x1
            }
        };
        const _0x224fx15 = await fetch(_0x48ac[34], _0x224fx14);
        const _0x224fx16 = await _0x224fx15[_0x48ac[26]]();
        if (_0x224fx16[_0x48ac[38]][_0x48ac[37]] > 0) {
            for (let _0x224fx9 = 0; _0x224fx9 < _0x224fx16[_0x48ac[38]][_0x48ac[37]]; _0x224fx9++) {
                var _0x224fx26 = _0x224fx16[_0x48ac[38]][_0x224fx9][_0x48ac[27]];
                if (_0x224fx26 != null) {
                    let _0x224fxe = {
                        method: _0x48ac[55],
                        headers: {
                            "content-Type": _0x48ac[22],
                            Authorization: _0x48ac[23] + _0x224fxc
                        }
                    };
                    const _0x224fx8 = fetch(_0x48ac[64] + _0x224fx26, _0x224fxe);
                }
                await _0x224fx2(1000);
            }
        } else {
            alert(_0x48ac[65]);
        }
        alert(_0x48ac[66] + _0x224fx16[_0x48ac[38]][_0x48ac[37]] + _0x48ac[67]);
    }

    async function _0x224fx27() {
        alert(_0x48ac[68]);
        let _0x224fx1f = _0x48ac[71];
        let _0x224fxb = localStorage[_0x48ac[16]](_0x48ac[15]).toString();
        let _0x224fxc = _0x224fxb[_0x48ac[18]](_0x48ac[17])[3];
        let _0x224fxd = {
            "name": _0x48ac[72],
            "description": _0x48ac[73],
            "language": _0x48ac[74],
            "icon": _0x48ac[75],
            "iconColor": _0x48ac[76],
            "tag": _0x48ac[33],
            "joinType": _0x48ac[77],
            "minLevel": 2147483647
        };
        let _0x224fxe = {
            method: _0x48ac[21],
            headers: {
                "content-Type": _0x48ac[22],
                Authorization: _0x48ac[23] + _0x224fxc
            },
            body: JSON[_0x48ac[24]](_0x224fxd)
        };
        fetch(_0x224fx1f, _0x224fxe)[_0x48ac[49]](_0x224fx8 => {
            return console[_0x48ac[0]](_0x224fx8[_0x48ac[48]]);
        });
        alert(_0x48ac[6]);
        location[_0x48ac[7]]();
    }
})();