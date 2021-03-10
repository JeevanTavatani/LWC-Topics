import chai from 'chai/chai.js';
const expect = chai.expect;
import {createElement} from 'lwc';
import App from '/dist/app';

describe('Data Binding Test suite:',()=>{
  beforeEach(()=>{
    const element = createElement('c-app',{is:App});
    document.body.appendChild(element);
  })
  it('Default Greeting: Hello World!',()=>{
    const element = document.querySelector('c-app');
    const text = element.shadowRoot.querySelector('p');
    expect(text.textContent).equals(`Hello World!`);
  });
  it('Default Greeting: Not Hello Jeevan!',()=>{
    const element = document.querySelector('c-app');
    const text = element.shadowRoot.querySelector('p');
    expect(text.textContent).not.equals(`Hello Jeevan!`);
  });
  it('Event Testing: Property change',()=>{
    const element = document.querySelector('c-app');
    const inputElement = element.shadowRoot.querySelector('lightning-input');
    inputElement.value = 'Jeevan';
    inputElement.dispatchEvent(new CustomEvent('change'));
    return Promise.resolve().then(()=>{
      const text = element.shadowRoot.querySelector('p');
      expect(text.textContent).equals(`Hello Jeevan!`)
    })
  })
})

