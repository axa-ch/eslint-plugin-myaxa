# className must use prefixClass function (myaxa-classnames)

We have to prefix our classnames. Right now, it's done using prefixClass function. This rule checks, if we always use it.

## Rule Details

This rule aims to className property in JSX block of code.

Examples of **incorrect** code for this rule:

```jsx
<div className="myClass"></div>
```

```jsx
<span className="myClass"></span>
```

```jsx
<div className={'myClass'}></div>
```

```jsx
<div className={classnames('myClass')}></div>
```

```jsx
const myClassesConst = 'myClass';
...
<div className={myClassesConst}></div>
```

Examples of **correct** code for this rule:

```jsx
<div className={prefixClass('myClass')}></div>
```

```jsx
<span attr-custom="true" className={prefixClass('myClass')}></span>
```

```jsx
<div className={prefixClass('myClass', 'classTwo')}></div>
```

```jsx
<MyComponent className={prefixClass("myClass", "classTwo")} />
```

## When Not To Use It

Until we change implementation of prefixing in myaxa project, this rule has to stay turned on.

## Further Reading

See readme in project.
