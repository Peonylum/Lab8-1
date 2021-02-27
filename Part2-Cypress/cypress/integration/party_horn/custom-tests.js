describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
    .then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number')
    .then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('audio')
    .then(($el) => {
      expect($el).to.have.prop('volume',0.33);
    });
  });

  it('Image and Sound Sources Change when selecting party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/audio/party-horn.mp3');
    });
  });
});

describe('Volume Image Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('Volume image changes to level 3 if greater than 66', () => {
    cy.get('#volume-slider').invoke('val', 70).trigger('input');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-3.svg')
    });
  });

  it('Volume image changes to level 2 if greater than 33 and less than 67', () => {
    cy.get('#volume-slider').invoke('val', 45).trigger('input');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg')
    });
  });

  it('Volume image changes to level 1 if greater than 0 and less than 34', () => {
    cy.get('#volume-slider').invoke('val', 25).trigger('input');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-1.svg')
    });
  });

  it('Volume image changes to level 0 if value is 0', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-0.svg')
    });
  });
});

describe('Honk Button Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('Honk Button is disabled if text field is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn')
    .then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Honk Button is disabled if text field is not a number', () => {
    cy.get('#volume-number').clear().type('testing');
    cy.get('#honk-btn')
    .then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });
});

describe('Volume Range Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('Error is Thrown when input is greater than 100', () => {
    cy.get('#volume-number').clear().type('7000');
    cy.get('#volume-number:invalid').should('have.length', 1);
  });

  it('Error is Thrown when input is less than 0', () => {
    cy.get('#volume-number').clear().type('-5');
    cy.get('#volume-number:invalid').should('have.length', 1);
  });
});
