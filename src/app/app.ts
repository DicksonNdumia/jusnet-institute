import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Gallery } from './components/gallery/gallery';
import { History } from './components/history/history';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { Courses } from './components/courses/courses';
import { Languages } from './components/languages/languages';
import { Exams } from './components/exams/exams';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
    Gallery,
    History,
    Contact,
    About,
    Courses,
    Languages,
    Exams,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
