'use strict';

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_WIZARDS = 4;

var fragment = document.createDocumentFragment();

var getRandomIndex = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return randomIndex;
};

function createWizardsArray() {
  var result = [];

  for (var i = 0; i < NUMBER_WIZARDS; i++) {
    result.push({
      name: WIZARD_NAMES[getRandomIndex(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomIndex(WIZARD_SURNAMES)],
      coatColor: WIZARD_COAT[getRandomIndex(WIZARD_COAT)],
      eyesColor: WIZARD_EYES[getRandomIndex(WIZARD_EYES)]
    });
  }

  return result;
}

var wizards = createWizardsArray();

userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');