### Haml Formatter

<span id="BADGE_GENERATION_MARKER_0"></span>
[![Custom](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![Custom](https://codecov.io/gh/TheRealSyler/haml-formatter/branch/master/graph/badge.svg)](https://codecov.io/gh/TheRealSyler/haml-formatter) [![circleci](https://img.shields.io/circleci/build/github/TheRealSyler/haml-formatter)](https://app.circleci.com/github/TheRealSyler/haml-formatter/pipelines) [![npmV](https://img.shields.io/npm/v/haml-formatter?color=green)](https://www.npmjs.com/package/haml-formatter) [![min](https://img.shields.io/bundlephobia/min/haml-formatter)](https://bundlephobia.com/result?p=haml-formatter) [![install](https://badgen.net/packagephobia/install/haml-formatter)](https://packagephobia.now.sh/result?p=haml-formatter) [![githubLastCommit](https://img.shields.io/github/last-commit/TheRealSyler/haml-formatter)](https://github.com/TheRealSyler/haml-formatter)
<span id="BADGE_GENERATION_MARKER_1"></span>

## Usage

```typescript
import { FormatHaml } from 'haml-formatter';

const result = FormatHaml(
  `

.level
    .level-left
               %h1.title
      %i.fa.fa-map-marker

                .level
                .level-left
     %h1.title
                  %i.fa.fa-map-marker
                  
                  `
);
```

#### Result

```haml

.level
    .level-left
        %h1.title
    %i.fa.fa-map-marker

        .level
            .level-left
    %h1.title
        %i.fa.fa-map-marker

```

<span id="DOC_GENERATION_MARKER_0"></span>

# Docs

- **[index](#index)**

  - [Options](#options)
  - [FormatHaml](#formathaml)

### index

##### Options

```typescript
interface Options {
  tabSize: number;
  insertSpaces: boolean;
}
```

##### FormatHaml

```typescript
function FormatHaml(text: string, options: Partial<Options>): string;
```

_Generated with_ **[suf-cli](https://www.npmjs.com/package/suf-cli)**
<span id="DOC_GENERATION_MARKER_1"></span>

## License

<span id="LICENSE_GENERATION_MARKER_0"></span>
Copyright (c) 2019 Leonard Grosoli Licensed under the MIT license.
<span id="LICENSE_GENERATION_MARKER_1"></span>
