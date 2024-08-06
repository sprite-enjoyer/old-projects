export enum Concentration{
    MUSCLE = "MUSCLE",
    STRETCH = "STRETCH",
    STRENGTH = "STRENGTH",
    FITNESS = "FITNESS",
    CARDIO = "CARDIO",
    ENDURANCE = "ENDURANCE",
}

export interface Exercise {
    name: string,
    OrientedOn: Concentration[],
    difficulty: number,
    image: string,
    intervalBetween?: number,
    restTime?: number,
    video: string,
    holdDuration?: number,
    bodyAreas: string[],
}
