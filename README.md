# React-UI-Blocker

DEMO: http://sbaydin.com/uiblocker/

A Body Blocker with Cool Animations for React Apps

It is simple to use

+ First Step : Install

`yarn add react-ui-blocker`
or
`npm install --save react-ui-blocker`

+ Second Step : Import
```js
import UIBlocker from 'react-ui-blocker';
```

+ And use it!

```js
  <UIBlocker
    theme="cubeGrid" // default
    isVisible={true}
    message="Loading.. or your custom message"
  />
```

Props
====

| Name        | Type      | Default     | Available Values                                              |
|-----------  |---------  |------------ |-------------------------------------------------------------- |
| theme       | String    | cubeGrid    | cubeGrid, rect, cube, bounce, dot, foldingCube, fadingCircle  |
| isVisible   | Boolean   | false       | true / false                                                  |
| message     | String    | Loading...  | Any string                                                    |


Credits
=====
This project is using the styles of HoldOnJS (https://sdkcarlos.github.io/sites/holdon.html)