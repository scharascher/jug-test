import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  createDb() {
    const reports = [
      {
        id: 1, author: 'Мария Шакшина', lang: 'ru', tags: ['horizon'],
        title: 'ЗаSTUBим бэкенд', complexity: 0
      },
      {
        id: 2, author: 'Jacek Broński-Jankowski', lang: 'en', tags: ['architecture'],
        title: 'Ads get creative', complexity: 1
      },
      {
        id: 3, author: 'Eunjae Lee', lang: 'en', tags: ['casestudy'],
        title: 'How to release open source library in 2020', complexity: 0
      },
      {
        id: 4, author: 'Charlie Gerard', lang: 'en', tags: ['ml', 'future'],
        title: 'Exploring the hidden potential of sound data', complexity: 0
      },
      {
        id: 5, author: 'Damian Dulisz', lang: 'en', tags: ['frameworks'],
        title: 'Vue.js: Forms & validations in the composition age', complexity: 1
      },
      {
        id: 6, author: 'Александр Руденко', lang: 'ru', tags: ['graphql', 'frameworks'],
        title: 'Все тонкости композиции и роутинга при использовании Relay Modern', complexity: 1
      },
      {
        id: 7, author: 'Margarita Obraztsova', lang: 'en', tags: ['horizon'],
        title: 'A tale of CSS resets and everything you need to know about them', complexity: 1
      },
      {
        id: 8, author: 'Сергей Мелюков', lang: 'ru', tags: ['buildtools', 'automatization'],
        title: 'Webpack в дикой природе', complexity: 1
      },
      {
        id: 9, author: 'Виктор Вершанский', lang: 'ru', tags: [],
        title: 'Chronotope: await Eloquent.Errors', complexity: 2
      },
      {
        id: 10, author: 'Craig Spence', lang: 'en', tags: ['experimental'],
        title: 'Music 101 with JS Bach', complexity: 0
      },
    ];

    const reportsTags = [
      'horizon',
      'architecture',
      'casestudy',
      'ml',
      'future',
      'frameworks',
      'graphql',
      'buildtools',
      'automatization',
      'experimental'];

    const reportsLangs = ['ru', 'en'];
    return {reports, reportsTags, reportsLangs};
  }

  constructor() {
  }
}
