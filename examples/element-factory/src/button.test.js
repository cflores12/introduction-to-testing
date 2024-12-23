import { fireEvent, screen } from '@testing-library/dom';
import { createButton } from './button.js';

describe('createButton', () => {
  beforeEach(() => {
    document.innerHTML = '';
  });

  it.skip('should create a button element', () => {
    //const button = createButton();
    document.body.appendChild(createButton());
    const button = screen.getByRole('button', { name : 'Click Me'});
    expect(button).toBeInTheDocument();
   /*  expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.tagName).toBe('BUTTON'); */
  });

  /* it('should have the text "Click Me"', () => {
    const button = createButton();
    expect(button.textContent).toBe('Click Me');
  }); */

  it('should change the text to "Clicked!" when clicked', async () => {
    //const button = createButton();
    document.body.appendChild(createButton());
    const button = screen.getByRole('button', { name: 'Click Me'});
    fireEvent(button, new MouseEvent('click'));
    expect(button.textContent).toBe('Clicked!');
    /* button.click();
    expect(button.textContent).toBe('Clicked!'); */
  });

});
