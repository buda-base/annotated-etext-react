# annotated-etext-react

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
