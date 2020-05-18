import { Teacher } from './Teacher';
import { Course } from './Course';
import { Room } from './Room';

export class Class {
    id: number;
    course: Course;
    teacher: Teacher;
    room: Room;
}
