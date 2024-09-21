import { Button } from '../Button';

describe('button', () => {
  // it('uses custom text', () => {
  //   cy.mount(<Button>Text</Button>);
  //   cy.mount(<Button>tutu</Button>);
  // });
  it('uses custom text', () => {
    cy.mount(<Button>Text</Button>);
    cy.get('button').contains('Text');
    cy.wait(1e3);
  });

  it('uses custom css class', () => {
    cy.mount(<Button className="custom">Button</Button>);
    cy.get('button').should('have.class', 'custom');
    cy.wait(1e3);
  });

  it('uses onClick prop', () => {
    cy.mount(<Button onClick={() => console.log('Clicked')}>Button</Button>);
    cy.get('button').click();
    cy.wait(1e3);
  });

  it('uses href prop', () => {
    cy.mount(<Button href="http://google.com">Link</Button>);
    cy.get('a').and('have.attr', 'href', 'http://google.com');
  });

  //   it.each([
  //     ['primary', 'primary'],
  //     ['secondary', 'secondary'],
  // ])(
  //     'should set the expected classes for the button of variant: %s',
  //     (variant, className) => {
  //         renderButton(
  //             {
  //                 variant: `${
  //                     variant as 'primary' | 'secondary' | 'tertiary'
  //                 }`,
  //             },
  //             'test'
  //         );
  //         expect(screen.getByRole('button')).toHaveClass(className);
  //     }
  // );

  // it('uses size prop for the button size', () => {
  //   cy.mount(<Button>text</Button>);
  //   cy.get('button').should('contains.text', 'text');
  // });
});
