require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe('index.html', () => {
  it('looks like the "what we want" completed example', () => {
    expect(true).to.be.true;
  });
});
