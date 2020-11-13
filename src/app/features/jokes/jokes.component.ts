import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent {

  public displayedJoke: string;
  private jokes: string[];

  constructor() {
    this.jokes = [
      'Joke1',
      'Joke2',
      'Joke3',
    ];
  }

  public get jokesList(): string[] {
    return this.jokes;
  }

  public getRandomJoke(): string {
    return this.jokes[this.randomIntFromInterval(0, this.jokes.length)];
  }

  public randomizeJoke(){
    this.displayedJoke = this.getRandomJoke();
  }

  private randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
