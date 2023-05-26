
## Typescript
 #### Install type script compiler globally using below command:
 - `npm install -g typescript`
 - `tsc --version`

 #### You can compile a typecript file using below command:
 - `tsc ./HelloWorld.ts`

 #### You can modify the TypeScript compiler options by adding a tsconfig.json file that defines the TypeScript project settings such as the compiler options and the files that should be included.

 - Add a simple tsconfig.json that set the options to compile to ES5 and use CommonJS modules.
 ```
 {
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
    }
  }
  ```

- You can specify the output directory for the compiler with the outDir attribute.
```
 {
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "out"
    }
  }
  ```

 - To use tsconfig.json, invoke tsc without input files. The TypeScript compiler knows to look at your tsconfig.json for project settings and compiler options.

 - VS Code has built-in support for TypeScript debugging. To support debugging TypeScript in combination with the executing JavaScript code, VS Code relies on source maps for the debugger to map between the original TypeScript source code and the running JavaScript. You can create source maps during the build by setting "sourceMap": true in your tsconfig.json.

```
 {
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "out",
        "sourceMap": true
    }
  }
  ```