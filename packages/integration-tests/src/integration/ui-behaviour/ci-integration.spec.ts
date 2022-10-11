import { navbar } from '../../views/navbar';
import { transformBasedOnUIVersion } from '../../support/transformations';
import { commonActions } from '../../views/common';

describe('Assisted Installer UI behaviour - cluster updates', () => {
  before(() => {
    cy.loadAiAPIIntercepts({
      activeSignal: 'READY_TO_INSTALL',
      activeScenario: 'AI_CREATE_MULTINODE',
    });
    transformBasedOnUIVersion();
  });

  beforeEach(() => {
    cy.loadAiAPIIntercepts(null);
  });

  describe('CI Integration - WIP', () => {
    it('Should do something', () => {
      cy.visit('/status'); // Fake page with only static content
      commonActions.visitNewClusterPage();
    });

    it('Should not update a cluster when no changes were done by the user', () => {
      Cypress.env('AI_FORBIDDEN_CLUSTER_PATCH', true);

      navbar.clickOnNavItem('Cluster details');
      commonActions.clickNextButton();
      commonActions.clickNextButton();
      commonActions.getHeader('h2').should('contain', 'Host discovery');
    });
  });
});
