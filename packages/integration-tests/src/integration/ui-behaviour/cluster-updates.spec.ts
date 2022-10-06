import { navbar } from '../../views/navbar';
import { commonActions } from '../../views/common';

describe('Assisted Installer UI behaviour - cluster updates', () => {
  before(() => {
    cy.loadAiAPIIntercepts({
      activeSignal: 'READY_TO_INSTALL',
      activeScenario: 'AI_CREATE_MULTINODE',
    });
  });

  beforeEach(() => {
    cy.loadAiAPIIntercepts(null);
<<<<<<< HEAD:packages/integration-tests/src/integration/ui-behaviour/cluster-updates.spec.ts
    commonActions.visitClusterDetailsPage();
  });

  afterEach(() => {
    Cypress.env('AI_FORBIDDEN_CLUSTER_PATCH', false);
=======
>>>>>>> 8306b6f6 (Move visit inside test to avoid load issue):packages/integration-tests/src/integration/ui-behaviour/cluster-updates.spec.js
  });

  describe('Prevent invalid PATCH requests', () => {
    it('Should not update a cluster when no changes were done by the user', () => {
      cy.visit(`/clusters/${Cypress.env('clusterId')}`);

      Cypress.env('AI_FORBIDDEN_CLUSTER_PATCH', true);

      navbar.clickOnNavItem('Cluster details');
      commonActions.clickNextButton();
      commonActions.clickNextButton();
      commonActions.getHeader('h2').should('contain', 'Host discovery');
    });
  });
});
