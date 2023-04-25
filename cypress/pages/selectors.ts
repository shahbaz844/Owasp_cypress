// import { readdir } from "fs/promises";

// export class DemoNetlifySelectors {
//     readonly iFrame = "iframe"
//     readonly iFrameBody = "0.contentDocument.body"
//     readonly draggedObjectContainer = "#u_content_text_12"
//     readonly openColorWindow = '[aria-label="Text color"] .tox-split-button__chevron'
//     readonly selectColor = '[role="menuitemcheckbox"]'
//     readonly objectToDrag = '.blockbuilder-content-tool-name:contains("'
//     readonly objectToDropPosition = '#u_column_5 .blockbuilder-layer-group'
//     readonly saveDesign = "#demo button"
// }

export class LoginPageSelectors{
    readonly email = "#email"
    readonly password = "#password"
    readonly loginButton = "#loginButton .mat-button-wrapper"
    readonly welcomePopupCloseButton = ".close-dialog"
}

export class HomePageSelectors{
    readonly navbarLogo = ".logo"
    readonly navbarAccountButton = "#navbarAccount"
    readonly navbarLoginButton = "#navbarLoginButton"
    readonly navbarBasket = "[routerlink='/basket']"
    readonly navbarSearchIcon = ".mat-search_icon-search"
    readonly searchArea = ".mat-search_field .mat-form-field-flex"
    readonly addToBasketButton = ".btn-basket"
    readonly itemCard = ".mat-grid-tile"
    readonly itemName = ".item-name"
    readonly addToBasketPopup = ".mat-simple-snackbar" //mat-simple-snackbar ng-star-inserted -- .mat-simple-snack-bar-content
}

export class BasketSelectors{
    readonly basketPageHeading = "h1"
    readonly itemsInBasket = "mat-row"
    readonly checkoutButton = "#checkoutButton .mat-button-wrapper"
    readonly itemCount = "mat-cell>span"
}

export class SelectAddressSelectors{
    readonly pageHeading = "h1"
    readonly addressInSelectAddress = "mat-row"
    readonly addressRadioButton = ".mat-radio-outer-circle"
    readonly continueButton = ".btn-next"
    readonly addNewAddressButton = ".btn-new-address .mat-button-wrapper"
}

export class AddNewAddressSelectors{
    readonly pageHeading = "h1"
    readonly countryInputField = "[placeholder *= 'country']"
    readonly nameInputField = "[placeholder *= 'name']"
    readonly mobileInputField = "[placeholder *= 'mobile number']"
    readonly zipCode = "[placeholder *= 'ZIP code']"
    readonly addressTextarea = "[placeholder *= 'address']"
    readonly cityInputField = "[placeholder *= 'city']"
    readonly stateInputField = "[placeholder *= 'state']"
    readonly submitButton = "#submitButton"

    // readonly nameInputField = ".mat-form-field-autofill-control ng-tns-c119-26"
    // readonly mobileInputField = "#mat-input-17"
    // readonly zipCode = "#mat-input-18"
    // readonly addressTextarea = "#address"
    // readonly cityInputField = "#mat-input-20"
    // readonly stateInputField = "#mat-input-21"
    // readonly submitButton = "#submitButton"
}

export class DeliverySpeedSelectors {
    readonly deliverySpeedPageHeading = ".addressCont h1"
    readonly deliverySpeedRadio = ".mat-radio-outer-circle"
    readonly continueButton = ".btn-next"
}

export class PaymentOptionsSelectors {
    readonly paymentOptionPageHeading = "h1"
    readonly addNewCardDropdown = "#mat-expansion-panel-header-3"
    readonly cardName = "#mat-input-15"
    readonly cardNumber = "#mat-input-16"
    readonly cardExpiryMonth = "#mat-input-17"
    readonly cardExpiryMonthDropdownOptions = "#mat-input-17 option"
    readonly cardExpiryYear = "#mat-input-18"
    readonly cardExpiryYearDropdownOptions = "#mat-input-18 option"
    readonly submitButton = "#submitButton"
}
