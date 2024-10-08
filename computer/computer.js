class Computer {
    constructor(make, model, capacity) {
        this.make = make;
        this.model = model;
        this.driveCapacity = capacity;
        this.batteryPercent = 100;
        this.status = false;
    }

    getBatteryPercent() {
        return `${this.batteryPercent}%`;
    }

    getStatus() {
        if (this.status === true) {
            return 'ON';
        } else {
            return 'OFF';
        }
    }
}