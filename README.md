# annotated-etext-react 

This is a demo of the principles of the text + annotation that will be used in the BUDA platform. You can find them in the following documents:

- [A distributed annotation architecture](https://docs.google.com/document/d/1iwriN1UMBIBQke4i0KIZu4N7JUuN1R5sH5sU9zqLKAI/edit?usp=sharing)
- [Annotation collection services](https://docs.google.com/document/d/1hu6bpQ0P8r87qXUMlfpToAjA0Db8ISADIZVUkJ66XSk/edit?usp=sharing)

## Installation

Import into `react` as usual:

```import AnnotatedEtextContainer from 'annotated-etext-react';```

## Demo

To run the demo:

```
cd demo
yarn install
yarn start
```

## For developers

#### Dependencies

After the initial `yarn install`, you should install `flow-typed` to get the flow library definitions necessary to fully check your code:

```
npm -g install flow-typed
flow-typed install
```

#### Code management

Transform Flow code to JavaScript before pushing to git: `yarn build`.

#### Tests

```
yarn test
```

## Copyright and License

Copyright (c) 2018 Buddhist Digital Resource Center, distributed under the [MIT License](LICENSE).
