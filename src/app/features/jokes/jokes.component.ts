import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent {

  public displayedJoke: string;
  private newJoke: string;
  private jokes: string[];

  constructor() {
    this.jokes = [
      'Joke1',
      'Joke2',
      'Joke3',
    ];

    this.newJoke = '';
  }

  public get jokesList(): string[] {
    return this.jokes;
  }

  public newJokeValueChanged(value: string): void {
    this.newJoke = value;
  }

  public addJoke(){
    this.jokes.push(this.newJoke);
  }

  public randomizeJoke(){
    this.displayedJoke = this.getRandomJoke();
  }

  public getRandomJoke(): string {
    return this.jokes[this.randomIntFromInterval(0, this.jokes.length)];
  }

  private randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
