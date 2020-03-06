import { FormatHaml } from '../index';

test('test', () => {
  const res = FormatHaml(
    `




.level
		.level-left
               %h1.title
      %i.fa.fa-map-marker

                .level
                .level-left			
     %h1.title
                  %i.fa.fa-map-marker
                  text
                  
                  `,
    { tabSize: 4, insertSpaces: true }
  );
  expect(res).toEqual(`
.level
    .level-left
        %h1.title
    %i.fa.fa-map-marker

        .level
            .level-left
    %h1.title
        %i.fa.fa-map-marker
            text
`);
});
test('test 2', () => {
  const res = FormatHaml(
    `




.level
    .level-left
               %h1.title  
      %i.fa.fa-map-marker  

                .level
                .level-left
     %h1.title
                  %i.fa.fa-map-marker
                  text
                  
                  `,
    { insertSpaces: false }
  );
  expect(res).toEqual(`
.level
	.level-left
		%h1.title
			%i.fa.fa-map-marker

				.level
					.level-left
		%h1.title
			%i.fa.fa-map-marker
				text
`);
});
