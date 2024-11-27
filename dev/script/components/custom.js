import {Fancybox} from "@fancyapps/ui";
import Choices from "choices.js";
import IMask from "imask";

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

const multiSelects = document.querySelectorAll("[data-multi-select]");
multiSelects.forEach((item, i) => {
    const choices = new Choices(item, {
        removeItemButton: true,
        removeItems: true,
        placeholder: true,
        placeholderValue: item.dataset.placeholder,
        itemSelectText: "Seç",
        noChoicesText: "Seçenek kalmadı.",
        noResultsText: "Aramanızla eşlenen sonuç bulunamadı.",
        shouldSort: false,
        classNames: {
            containerOuter: ['choices'],
            containerInner: ['choices__inner'],
            input: ['choices__input'],
            inputCloned: ['choices__input--cloned'],
            list: ['choices__list'],
            listItems: ['choices__list--multiple'],
            listSingle: ['choices__list--single'],
            listDropdown: ['choices__list--dropdown'],
            item: ['choices__item'],
            itemSelectable: ['choices__item--selectable'],
            itemDisabled: ['choices__item--disabled'],
            itemChoice: ['choices__item--choice'],
            description: ['choices__description'],
            placeholder: ['choices__placeholder'],
            group: ['choices__group'],
            groupHeading: ['choices__heading'],
            button: ['choices__button'],
            activeState: ['is-active'],
            focusState: ['is-focused'],
            openState: ['is-open'],
            disabledState: ['is-disabled'],
            highlightedState: ['is-highlighted'],
            selectedState: ['is-selected'],
            flippedState: ['is-flipped'],
            loadingState: ['is-loading'],
            notice: ['choices__notice'],
            addChoice: ['choices__item--selectable', 'add-choice'],
            noResults: ['has-no-results'],
            noChoices: ['has-no-choices'],
        },
    })
})

// Phone number mask
const phoneInputs = document.querySelectorAll("input[type='tel']");
phoneInputs.forEach((el, i) => {
    IMask(el, {
        mask: [
            {
                mask: "{0} (500) 000 00 00",
                country: "Turkey",
                startsWith: "0"
            }
        ],
        dispatch: (appended, dynamicMasked) => {
            const number = (dynamicMasked.value + appended).replace(/\D/g,'');

            return dynamicMasked.compiledMasks.find(m => number.indexOf(m.startsWith) === 0);
        }
    })
})
