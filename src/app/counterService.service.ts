export class CounterService {
    activeInactive: number = 1;
    inactiveActive: number = 2;

    increaseActiveInactive() {
        this.activeInactive += 1;
        console.log('increaseActiveInactive', this.activeInactive)
    }

    increaseInactiveActive() {
        this.inactiveActive += 1;
        console.log('increaseInactiveActive', this.inactiveActive)
    }
}