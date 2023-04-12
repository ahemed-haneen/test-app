import { module, test } from 'qunit';
import { setupRenderingTest } from 'drug-report/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | result-viewer/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ResultViewer::Details />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ResultViewer::Details>
        template block text
      </ResultViewer::Details>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
