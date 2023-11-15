import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number  = 45;
  public atribute: string = 'Chula';
  public showButton: boolean = true;
  public owo: string = 'Esta madre desaparece si la tocas';
  private heores: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeAtribute(): void {
    this.atribute = this.atribute === 'Chula' ? 'Chiluda' : 'Chula';
  }

  changeHero(): void {
    this.name = this.heores[this.getRandomInt(0, this.heores.length - 1)];

  }

  changeAge(): void {
    this.age = this.getRandomInt(0, 100);
  }

  hideButton(): void {
    this.showButton = false;
  }

  showButtonAgain(): void {
    this.showButton = true;
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
