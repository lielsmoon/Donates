import { DonateForm } from "./donate-form";
import { DonateList } from './donate-list';
import * as FolderUtils from "../core/utils";

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
];

export default class App {
    #donateForm
    #donateList
    constructor () {
        this.state = {
            donates: mockDonates,
            totalAmount: 0,
        }
        this.state.totalAmount = FolderUtils.calculateSumOfNumbers(mockDonates);
        this.#donateForm = new DonateForm(this.state.totalAmount,this.createNewDonate.bind(this));
        this.#donateList = new DonateList(mockDonates);
    }
    createNewDonate (newDonate) {
        this.state.donates.push(newDonate);
        this.state.totalAmount = FolderUtils.calculateSumOfNumbers(mockDonates);
        this.#donateList.updateDonates(this.state.donates)
        this.#donateForm.updateTotalAmount(this.state.totalAmount);
    }
    run() {
        const donateFormHTML = this.#donateForm.render();
        const donateListHTML = this.#donateList.render();
        document.body.append(donateFormHTML, donateListHTML);
    }
}