import { FormatHaml } from '..';

test('multilineCode', () => {
  const res = FormatHaml(`= link_to_remote "Add to cart",
:url => { :action => "add", :id => product.id },
          :update => { :success => "cart", :failure => "error" }

  - foo = "hello" 
  - foo << " there"   
  - foo << " you!"
  %p= foo`);

  expect(res).toEqual(`= link_to_remote "Add to cart",
  :url => { :action => "add", :id => product.id },
  :update => { :success => "cart", :failure => "error" }

  - foo = "hello"
  - foo << " there"
  - foo << " you!"
  %p= foo
`);
});
