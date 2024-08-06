import { Exercise } from "./Exercise"

export enum WeekDays {
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY", 
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY",
}

export enum Audience{
    CHILDREN = "CHILDREN",
    ADULTS = "ADULTS",
    SENIORS = "SENIORS",
}

export interface Routine {
    name: string,
    Difficulty: number,
    image: string,
    objectives: string[],
    isFor: Audience[],
}

export interface RoutineDetails extends Routine{
    routine: Map<WeekDays, Exercise[]>,
}