# React-UI-Blocker
A Body Blocker with Cool Animations for React Apps

It is simple to use
First
`import UIBlocker from 'react-ui-blocker';`

And use it with one of these themes,

`
  <UIBlocker
    theme="cubeGrid" // default
    isVisible={true}
    message="Loading.. or your custom message"
  />
`

Props
=====

| Name        | Type      | Default     | Available Values                                              |
|-----------  |---------  |------------ |-------------------------------------------------------------- |
| theme       | String    | cubeGrid    | cubeGrid, rect, cube, bounce, dot, foldingCube, fadingCircle  |
| isVisible   | Boolean   | false       | true / false                                                  |
| message     | String    | Loading...  | Any string                                                    |