import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses = [
    { title: 'Angular Fundamentals', teacher: 'Lucas', id: 1 },
    { title: 'Javascript the Hard Parts', teacher: 'Lucas', id: 2 },
  ];

  selectedCourse = null;

  selectCourse(course: any) {
    this.selectedCourse = course;
  }

  deleteCourse(course: any) {
    console.log('DELETE COURSE =>', course.id);
  }
}
