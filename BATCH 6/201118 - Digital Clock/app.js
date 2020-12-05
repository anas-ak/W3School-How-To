class DigitalClock {
        
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();

        setInterval( () => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();

        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const secondFormatted = parts.second.toString().padStart(2, "1");
        const timeFormatted = `${parts.hour}:${minuteFormatted}:${secondFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }

    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours()%12 || 12,
            minute: now.getMinutes(),
            second: now.getSeconds(),
            isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();