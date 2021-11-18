import { Settings  as Set} from "../core/constans/settings";
import * as FolderUtils from "../core/utils";
export class DonateList {
    #generalContainer
    #donateTitle
    #donates
    #donatContainer
    constructor (donates) {
        this.#donates = donates;
        this.#generalContainer = document.createElement('div');
        this.#donateTitle = document.createElement('h2');
        this.#donatContainer =document.createElement('div')
    }

    createDonatList (tegToAdd, object) {
        const donateItem = document.createElement('div');
        const tegB = document.createElement('b');
        donateItem.className = 'donate-item';
        donateItem.textContent = FolderUtils.getFormattedTime(object.date);
        
        tegB.textContent = ` - ${object.amount}${Set.currency}`;
       
        donateItem.append(tegB);

        tegToAdd.append(donateItem);
    }
    
    updateDonates (updatedDonates) {
        let smallContaine = document.querySelector('.donates-container__donates');
        smallContaine.innerHTML = '';
        updatedDonates.forEach(donate => {
            const donateItem = document.createElement('div');
            donateItem.className = 'donate-item';
            donateItem.textContent = `${FolderUtils.getFormattedTime(donate.date)}`
            const tegB  = document.createElement('b');
            tegB.textContent = ` - ${donate.amount}${Set.currency}`
            donateItem.append(tegB);
            smallContaine.append(donateItem);
        })
    }

    render() {
        this.#generalContainer.className = 'donates-container';
        this.#donateTitle.className = 'donates-container__title';
        this.#donatContainer.className = 'donates-container__donates'
        this.#donateTitle.textContent = 'Список донатов';
        this.#generalContainer.append(this.#donateTitle, this.#donatContainer);

        for (const obj of this.#donates) {
            this.createDonatList(this.#donatContainer, obj);
        }

        return this.#generalContainer
    }
}