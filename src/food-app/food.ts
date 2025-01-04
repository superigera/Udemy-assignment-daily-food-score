import { Foodable } from './interfaces';
import { Score } from './score';

export class Food implements Foodable {
    constructor(public element: HTMLDivElement) {
        //bindでthisを明示的に指定する
        this.element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        //toggleでクラスを追加、削除する
        this.element.classList.toggle('food--active');

        //スコアの合計を画面に反映
        const score = Score.getInstance();
        score.render();
    }
}
