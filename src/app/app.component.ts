import { Component } from '@angular/core'
import { lorem } from 'faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'typing'
  sentence = lorem.sentence()
  enteredText = ''

  onInput(event: any) {
    this.enteredText = event.target.value
  }

  compare(letter:string, enteredLetter:string){
    if(!enteredLetter){
      return 'pending';
    }

    return letter === enteredLetter ? 'correct' : 'incorrect'
  }
} 
