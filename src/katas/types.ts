export enum Stance {
    FRONT = 'Zenkutsu Dachi',
    RIDING = 'Kiba Dachi'
}

export enum Type {
    ATTACK = 'Tsuki',
    DEFENCE = 'Uke',
    SWIPE = 'Barai'
}

export enum Arm {
    SEIKEN = 'Seiken'
}

type LIMB = Arm

export enum Level {
    LOW = 'Gedan',
    MIDDLE = 'Chudan',
    HIGH = 'Jodan'
}

export enum Direction {
    LEFT = 'Hidari',
    RIGHT = 'Migi',
    FORWARD = 'Mae',
    BACKWARD = 'Ushiro'
}

export enum Degree {
    FORTI_FIVE = '45',
    NINETY = '90'
}

export interface Step {
    stance: Stance
    type: Type,
    limb: LIMB,
    level: Level
    direction: Direction,
    degree?: Degree
}

export interface Kata {
    name: string,
    steps: Step[]
}
