export class ProgrammingClass {

    location: string;
    classTopic: string;
    teachingResources: string;
    confirmation: boolean;
    numStudents: number;
    startHour: number;
    startMin: number;
    endHour: number;
    endMin: number;
    sumOfHours: number;
    sumOfMins: number;
    totalHoursDur: number;
    totalMinsDur: number;
    homework: boolean;
    amountOfExercises: number;

    public validateSchedules(): boolean {
        if ((this.startHour < 0 || this.startHour > 23) || (this.endHour < 0 || this.endHour > 23) || 
            (this.startMin < 0 || this.startMin > 59) || (this.endMin < 0 || this.endMin > 59)) {
            console.log("\n-> Invalid schedule information.");
            return false;
        } else
            return true;

    }

    public status(): void {
        console.log(`\n--- General Class Information ---\n`);

        const isConfirmed = this.confirmClass();
        if (!isConfirmed) {
            console.log("-> Class not confirmed.");
            return;
        }

        // Ensure hours and minutes are always two digits
        const formattedHours = String(this.totalHoursDur).padStart(2, '0');
        const formattedMinutes = String(this.totalMinsDur).padStart(2, '0');

        if(!this.confirmClass()) {
            console.log("-> Class not confirmed.");
        } else {
            console.log(`-> Location: ${this.location};`);
            console.log(`-> Class topic: ${this.classTopic};`);
            console.log(`-> Teaching resources: ${this.teachingResources};`);
            console.log(`-> Is the class confirmed? ${this.confirmClass()};`);
            console.log(`-> Duration time: ${formattedHours} h ${formattedMinutes} min;`);
            console.log(`-> Number of students present: ${this.numStudents};`);
            console.log(`-> Will there be homework? ${this.announceHomework()};`);
            console.log(`-> Amount of exercises: ${this.amountOfExercises}.`);
        }
    }

    public confirmClass(): boolean {
    
        this.calculateDuration();

        return this.confirmation && this.numStudents > 0 && (this.totalHoursDur != 0 || this.totalMinsDur != 0);

    }

    public cancelClass(): void {
        this.confirmation = false;
    }

    public calculateDuration(): void {
        
        if (!this.validateSchedules()) {
            console.log("\n-> Duration calculation skipped due to invalid input.");
            return;
        }
    
        // Reset total duration
        this.totalHoursDur = 0;
        this.totalMinsDur = 0;
    
        // Convert start and end times to total minutes
        let totalStartingMins = this.startHour * 60 + this.startMin;
        let totalEndingMins = this.endHour * 60 + this.endMin;
    
        // Handle overnight durations
        if (totalEndingMins < totalStartingMins) {
            totalEndingMins += 24 * 60; // Add a day's worth of minutes
        }
    
        // Calculate total duration in minutes
        let totalDurationMins = totalEndingMins - totalStartingMins;
    
        // Calculate hours and minutes from total duration
        this.totalHoursDur = Math.floor(totalDurationMins / 60);
        this.totalMinsDur = totalDurationMins % 60;

    }

    public announceHomework(): boolean {

        this.homework = this.amountOfExercises > 0;

        return this.homework;

    }

}