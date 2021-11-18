import { Settings } from "../core/constans/settings";

export class DonateForm {
    #container
    constructor (totalAmount, createNewDonate ) {
        this.#container = document.createElement('form');
        this.totalAmount = totalAmount;
        this.createNewDonate = createNewDonate;
    }


    render () {
        this.#container.className = 'donate-form';
        const totalAmount = document.createElement('h1');
        totalAmount.id = 'total-amount';
        totalAmount.textContent = `${this.totalAmount}${Settings.currency}`;

        const inputLabel = document.createElement('label');
        inputLabel.className = 'donate-form__input-label';
        inputLabel.textContent = `Введите сумму в ${Settings.currency}`;

        const inputDonate = document.createElement('input');
        inputDonate.className = 'donate-form__donate-input';
        inputDonate.name = 'amount';
        inputDonate.type = 'number';
        inputDonate.max = 100;
        inputDonate.min = 0;
        
        inputDonate.setAttribute("required", "");

        const buttonDonate = document.createElement('button');
        buttonDonate.className = 'donate-form__submit-button';
        buttonDonate.type = 'submit';
        buttonDonate.textContent = 'Задонатить';

        this.#container.addEventListener('submit', event => {
            event.preventDefault();
            const amount = this.#container.querySelector('.donate-form__donate-input');
            this.createNewDonate({
                date: new Date(),
                amount: Number(amount.value)
            })
            amount.value = 0;
        })

        inputLabel.append(inputDonate);
        this.#container.append(totalAmount, inputLabel, buttonDonate);
        return this.#container;
    }
    updateTotalAmount (newAmount) {
        document.querySelector('#total-amount').textContent = `${newAmount}${Settings.currency}`
    }
}