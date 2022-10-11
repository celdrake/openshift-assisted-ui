import * as utils from '../support/utils';
import { navbar } from './navbar';

export const commonActions = {
  clickButtonContainingText: (text: string) => {
    cy.get(`button:contains('${text}')`).scrollIntoView().should('be.visible').click();
  },
  waitForSpinnerToDisappear: () => {
    cy.get('.pf-c-spinner__tail-ball').should('not.exist');
  },
  waitForValidationsToInitialize: () => {
    cy.get('.pf-m-info').should('not.exist');
  },
  getNextButton: () => {
    return cy.get(Cypress.env('nextButton'));
  },
  clickNextButton: () => {
    commonActions.getNextButton().should('be.enabled').click();
  },
  getBackButton: () => {
    return cy.get(Cypress.env('backButton'));
  },
  waitForSave: () => {
    cy.get(Cypress.env('spanRoleProgressBar')).should('not.match', /.*Saving.*changes.*/);
  },
  waitForNext: () => {
    cy.get(Cypress.env('nextButton')).should('be.enabled');
  },
  getHeader: (level = 'h1', timeout = Cypress.env('WAIT_FOR_HEADER_TIMEOUT')) => cy.get(level, { timeout: timeout }),
  getInfoAlert: () => {
    return cy.get(Cypress.env('infoAlertAriaLabel'));
  },
  getDangerAlert: () => {
    return cy.get(Cypress.env('dangerAlertAriaLabel'));
  },
  startAtNetworkingStep: () => {
    if (utils.hasWizardSignal('READY_TO_INSTALL')) {
      navbar.openWizardStep('Networking');
    } else {
      commonActions.getHeader('h2').should('contain', 'Host discovery');
      commonActions.clickNextButton();
      commonActions.clickNextButton();
    }
  },
  visitNewClusterPage: () => {
    cy.visit('/clusters/~new');
  },
  visitClusterWizardPage: () => {
    cy.visit(`/clusters/${Cypress.env('clusterId')}`);
  },
};
