---
description: 반응형 컴포넌트의 동작에 대해서 설명합니다.
sidebar-position: 50
---

# 반응형 컴포넌트

Svelte에서는 기본적으로 선언된 변수의 값이 바뀔 때 화면에 표시되는 내용을 자동으로 업데이트 해줍니다.  
여기서는 그 반응형 동작에 대해 알아봅시다.

## 기본

```svelte
<script lang="ts">
let name = 'World'

const changeName = () => {
    name = 'Svelte'
}
</script>

<div>Hello, {name}!</div>

<button on:click={changeName}>Change name</button>
```

이 코드에서 `Change name` 버튼을 누르면 `name` 변수가 `Svelte`로 변경되어 화면에 표시된 `Hello, World!` 텍스트가 `Hello, Svelte!` 로 변경되는걸 보실 수 있습니다.  
이렇게 스벨트에서는 변수 값 변경을 자동으로 감지해 수정이 필요한 부분을 업데이트 해줍니다.

## $: 문법

Svelte에서는 `$:`을 이용해 리액티브(?)한 동작을 할 수 있습니다.  
아무리 변수 변경을 감지해준다 하더라도 그 변수를 사용하는 또다른 변수의 값은 변경되지 않습니다.  
이런 문제를 해결해주는 문법이 `$:`입니다.

`$:` 문법은 읽기 전용 값에 사용됩니다.

:::tip

`$:` 문법으로 선언된 변수는 읽기 전용입니다

:::

```svelte
<script lang="ts">
let count = 10

$: multiply = count * count

const add = () => {
    count += 1
}
</script>

<div>count: {count}, count 제곱: {multiply}</div>

<button on:click={add}>+1</button>
```

`+1` 버튼을 클릭하면 count와 count 제곱의 값이 같이 올라가는 것을 보실 수 있습니다.  
또한 `$:` 문법은 그 범위 안에서 사용된 변수의 변경만 감지하기 때문에 값이 변경될 때 어떤 스크립트를 실행하는 데에 사용될 수도 있습니다.

```svelte
<script lang="ts">
let count = 10

$: console.log(`new count: ${count}`) // 1줄

$: {
    console.log(`new count: ${count}`)

    // doSomeSansWork()
} // 여러줄
</script>

<!-- ... -->
```
