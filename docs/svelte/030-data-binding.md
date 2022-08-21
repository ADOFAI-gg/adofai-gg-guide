---
description: 컴포넌트 내에 데이터를 포함시키는 방법을 설명합니다.
sidebar-position: 30
---

# 데이터 바인딩

Svelte에는 컴포넌트 내에 데이터를 포함할 수 있는 방법이 있습니다. 그게 바로 데이터 바인딩이죠.

[컴포넌트](components) 에서 만들어본 Hello, Svelte를 출력하는 코드를 봅시다.

```svelte title="Hello.svelte"
<div>Hello, Svelte!</div>
```

이제 이 컴포넌트에 데이터 바인딩을 해보겠습니다.

```svelte title="Hello.svelte"
<script lang="ts">
let name = 'Svelte'
</script>

<div>Hello, {name}!</div>
```

코드를 차례대로 해석해봅시다.

`<script>` 태그에서는 `name` 이라는 변수를 선언합니다. `Svelte`라는 값으로요.

`<div>Hello, {name}!</div>` 에서는 `{name}`을 스크립트에서 선언한 변수 `name`으로 치환합니다.

결과적으로 화면에는 `Hello, Svelte!` 가 출력되게 됩니다.  
이렇게 스크립트에 선언된 데이터를 표시하는 데 `{}` 를 사용할 수 있습니다.

`{}` 에서는 단순 변수 표시가 아닌 간단한 수식도 넣을 수 있습니다.

예를 들면 이런거죠.

```svelte
<script>
let count = 100
</script>

<div>Count: {count} Count+1: {count+1}</div>
```

결과적으로 화면에는 `Count: 100 Count+1: 101` 이 표시됩니다.
