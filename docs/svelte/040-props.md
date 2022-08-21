---
description: 컴포넌트에서 데이터를 받는 방법을 설명합니다.
sidebar-position: 40
---

# Props

[컴포넌트](components) 설명을 읽어보셨다면 `Item` 컴포넌트가 `number` 이라는 값을 받는 것을 보셨을 겁니다.  
이 글에서는 이런 데이터를 받는 방법을 알아보겠습니다.

## Prop 선언하기

일단 데이터를 받는 방법은 간단합니다.  
[데이터 바인딩](data-binding) 에서 했던 것처럼 변수를 선언하고 그 변수를 export 해주세요.  
`Item` 컴포넌트로 예를 들어 보겠습니다.

```svelte title="Item.svelte"
<script lang="ts">
export let number: number
</script>
<div>Item #{number}</div>
```

이 코드에서는 `number` 이라는 이름의 prop을 받게 됩니다.  
하지만 만약 받아야하는 변수의 이름이 자바스크립트에서 사용되는 기본 변수 등의 이름과 겹친다면 어떻게 할까요?  
Svelte에서는 변수의 이름과 prop의 이름을 다르게 할 수 있습니다.
먼저 변수를 선언한 후 나중에 export 해주는거죠.

```svelte title="Item.svelte"
<script lang="ts">
let value: number

export { value as number }
</script>
<div>Item #{value}</div>
```

이 코드에서 변수의 이름은 `value`로 설정되었지만, 받는 prop의 이름은 `number`입니다.

## Prop 사용하기

데이터를 받게 설정해줬으면 이제 사용해 봐야겠죠? 이번에는 컴포넌트에 prop을 넘기는 방법에 대해 알아보겠습니다.

기본적으로, svelte에서는 html 태그의 attribute처럼 데이터를 넘겨줄 수 있습니다.

```svelte
<Hello name="World" />
```

하지만 받을 데이터의 타입이 문자열이 아니라면 이 방법을 쓸 수 없겠죠.  
이럴 때는 중괄호(`{}`)를 사용합니다.

```svelte
<Item number={100} />
```

중괄호에는 prop을 넘기는 컴포넌트에 선언된 변수도 사용할 수 있습니다.

```svelte
<script lang="ts">
let index = 100
</script>

<Item number={index} />
```

이때, prop의 이름과 변수의 이름이 같다면 이런 형식이 됩니다.

```svelte
<script lang="ts">
let number = 100
</script>

<Item number={number} />
```

하지만 svelte에는 이것을 짧게 줄일 수 있는 방법이 존재합니다.

```svelte
<script lang="ts">
let number = 100
</script>

<Item {number} />
```

이 코드에서는 `Item` 컴포넌트의 `number` prop으로 `number` 변수의 값을 넘겨줍니다.

## Prop에 기본값 설정하기

앞에서 설명한 방법들은 모두 해당 prop이 **필수**일 때 사용하는 방법입니다.  
만약 그 컴포넌트의 prop이 필수가 아니라면 기본값을 설정할 수 있습니다.  
방법은 매우 간단합니다. 변수에 값을 할당해주면 되거든요.

```svelte title="Hello.svelte"
<script lang="ts">
export let name: string = 'Svelte'
</script>

<div>Hello, {value}!</div>
```
