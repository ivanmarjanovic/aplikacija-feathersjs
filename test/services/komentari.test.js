const assert = require('assert');
const app = require('../../src/app');

describe('\'komentari\' service', () => {
  it('registered the service', () => {
    const service = app.service('komentari');

    assert.ok(service, 'Registered the service');
  });
});
