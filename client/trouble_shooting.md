## React 17 JSX, react-scripts with TypeScript

아래와 같은 Error 발생
```
.../node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js:239
      appTsConfig.compilerOptions[option] = value;
                                          ^

TypeError: Cannot assign to read only property 'jsx' of object '#<Object>'
    at verifyTypeScriptSetup (.../node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js:239:43)
    at Object.<anonymous> (.../node_modules/react-scripts/scripts/start.js:31:1)
...
```

change this code block in node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js
```
    let result;
    parsedTsConfig = immer(readTsConfig, config => {
      result = ts.parseJsonConfigFileContent(
        config,
        ts.sys,
        path.dirname(paths.appTsConfig)
      );
    });
```
Like this : 
```
    parsedTsConfig = {...readTsConfig};

    const result = ts.parseJsonConfigFileContent(
      parsedTsConfig,
      ts.sys,
      path.dirname(paths.appTsConfig)
    );
```