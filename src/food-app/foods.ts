import { Foodsable } from './interfaces';
import { Food } from './food';

export class Foods implements Foodsable {
    private static instance: Foods;
    elements = document.querySelectorAll<HTMLDivElement>('.food');
    constructor() {
        this.elements.forEach(element => {
            new Food(element);
        });
    }

    //シングルトンパターン
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }

    //選択された要素を取得
    private _activeElements: HTMLDivElement[] = [];
    get activeElements(): HTMLDivElement[] {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('food--active')) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }

    //選択された要素のスコアを取得
    private _activeElementsScore: number[] = [];
    get activeElementsScore(): number[] {
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const foodScore = element.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
}
