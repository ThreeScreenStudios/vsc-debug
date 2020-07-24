# vsc-debug

## launch.json

```
{
	// Use IntelliSense to learn about possible attributes.
	// Hover to view descriptions of existing attributes.
	// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
	"version": "0.2.0",
	"configurations": [{
		"type": "chrome",
		"request": "launch",
		"name": "vuejs: chrome",
		"url": "http://localhost:8080",
		"webRoot": "${workspaceFolder}/src",
		"breakOnLoad": true,
		"sourceMapPathOverrides": {
			"webpack:///./src/*": "${webRoot}/*"
		}
	}]
}
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
