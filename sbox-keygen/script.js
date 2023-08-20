document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const outputTextarea = document.getElementById("outputTextarea");

    generateButton.addEventListener("click", function () {
        outputTextarea.value = generateUUIDs(10).join("\n");
    });

    function generateUUIDs(count) {
        const uuids = [];
        for (let i = 0; i < count; i++) {
            const uuid = generateUUID();
            uuids.push(uuid);
        }
        return uuids;
    }

    function generateUUID() {
        const pattern = "XXYXX-XYXX-YXXY-XYXY-YXYYXXYXYX";
        return pattern.replace(/[XY]/g, function (c) {
            const r = c === "X" ? getRandomDigit() : getRandomLetter();
            return r;
        });
    }

    function getRandomDigit() {
        return Math.floor(Math.random() * 10).toString();
    }

    function getRandomLetter() {
        const letters = "ABCDEF";
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters.charAt(randomIndex);
    }
});
