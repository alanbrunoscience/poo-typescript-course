import { ProgrammingClass } from "./ProgrammingClass";

export function main() {

    let c1 = new ProgrammingClass();

    c1.location = "Youtube";
    c1.classTopic = "Object-Oriented Programming";
    c1.teachingResources = "Slides";
    c1.confirmation = true;
    c1.numStudents = 100;
    c1.startHour = 23;
    c1.startMin = 50;
    c1.endHour = 0;
    c1.endMin = 10;
    c1.homework = true;
    c1.amountOfExercises = 50;

    c1.status();

    let c2 = new ProgrammingClass();

    c2.location = "Hotmart";
    c2.classTopic = "Data Structure";
    c2.teachingResources = "Slides";
    c2.confirmation = true;
    c2.numStudents = 100;
    c2.startHour = 13;
    c2.startMin = 59;
    c2.endHour = 14;
    c2.endMin = 0;
    c2.homework = false;
    c2.amountOfExercises = 1;

    c2.status();

}

main();