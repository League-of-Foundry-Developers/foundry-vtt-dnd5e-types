# foundry-vtt-dnd5e-types
A community effort to create type definitions for the dnd5e system in Foundry VTT


## Objective

Provide a third party typescript definition library for the [Foundry VTT D&D 5e System](https://gitlab.com/foundrynet/dnd5e) which can be installed and used alongside [foundry-vtt-dnd5e-types](https://github.com/League-of-Foundry-Developers/foundry-vtt-dnd5e-types) to bring typescript support to dnd5e related modules.
## Supported dnd5e versions

At the moment, only 1.2.4 (0.7.9) is supported. Work on 1.3.0 (and 0.8.x) is in the pipeline.

## Installation

You can install foundry-vtt-dnd5e-types from the [npm registry](https://npmjs.org/). We provide distribution tags for the different supported Foundry VTT versions that have the form `fvtt-<foundry-version>`. For example, the distribution tag for dnd5e 1.2.4 is `fvtt-1.2.4`.

In order to install the desired version, run

```sh
npm install --save-dev @league-of-foundry-developers/foundry-vtt-dnd5e-types@fvtt-<foundry-version>
```

For example, to install the type definitions for dnd5e 1.2.4, run

```sh
npm install --save-dev @league-of-foundry-developers/foundry-vtt-dnd5e-types@fvtt-1.2.4
```

You can then update foundry-vtt-dnd5e-types using the regular update mechanism for npm (see [npm update](https://docs.npmjs.com/cli/v7/commands/npm-update)).

## Usage

Add foundry-vtt-dnd5e-types to your types section in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@league-of-foundry-developers/foundry-vtt-dnd5e-types"],
    "moduleResolution": "node"
  }
}
```

This will make the type definitions available globally in your project.

Make sure you are using `"moduleResolution": "node"`, too. It is required for some dependencies to be resolved correctly.

## Contributing

Contributions are very welcome in order to decrease the individual workload. Filing issues for wrong / missing types is also a great way to help us improve the type definitions.

There are individual branches for the different supported dnd5e system versions that are being worked on. They are named according to the system version, e.g. the branch for dnd5e 1.2.4 is called `dnd5e-1.2.4`. All work to improve the type definitions for a specific version needs to be done through Pull Requests to the corresponding branch.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for more details on how to contribute.

If you have any specific questions, feel free to contact us in the [League of Extraordinary Foundry Developers Discord](https://discord.gg/52DNPzqm2Z).

## Type-Checking, Linting, Testing

When contributing, make sure sure that the type checks pass, the linter is green and the tests are green. We _do_ have checks in the CI but running this locally also helps you while developing and saves you time as you don't have to wait for the CI.

You can run type checking and linting with the following command:

```
npm run lint
```

You can run the tests with

```
npm run test
```

## License

This project is licensed under the MIT license. You can find a copy at [LICENSE](LICENSE).
