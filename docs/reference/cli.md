# Command line tool 

A core feature of the Impact Framework is the `impact-engine` command line tool (CLI). This is how you trigger Impact Framework to execute a certain manifest file. 

Let's take a look at the various commands exposed by `impact-engine`.

## `impact-engine`

If you have globally installed our `if` npm package, you can invoke the CLI using the `impact-engine` command directly in your terminal. The `impact-engine` command is an alias to `npx ts-node src/index.ts`, which executes the Impact Framework's `src/index.ts` script and acts as the entry point for Impact Framework.

`impact-engine <args>`

## `--impl`

The `--impl` flag is the only required flag and tells `impact-engine` where to find the manifest file that you want to execute. This command expects to receive the path where your manifest file is saved, as shown in the following example:

```sh
impact-engine --impl examples/impls/my-manifest.yml
```

## `--ompl`

The `--ompl` flag is optional and is used for defining a path to save your output data. If you provide the `--ompl` command with a path, your output data will be saved as a `.yml` file to disk. If you omit this command, your output data will be displayed in the terminal.

Here is an example of `--ompl` being used to define a path:

```sh
impact-engine --impl examples/impls/my-manifest.yml --ompl examples/ompls/my-outdata.yml
```
