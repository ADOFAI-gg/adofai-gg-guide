---
description: Svelte 컴포넌트를 정의하고 사용하는 방법에 대해 설명합니다
---

# 컴포넌트

Svelte에서의 컴포넌트는 웹 페이지를 구성하는 태그들를 모아놓은 무언가 입니다  
다음의 html 코드를 봅시다.

```html
<div>Item #1</div>
<div>Item #2</div>
<div>Item #3</div>
```

이 코드에서 같은 형식의 코드가 반복되는 것을 보실 수가 있습니다.  
이런 코드에서의 중복을 최소화 시켜주는 그런 개념이 바로 컴포넌트입니다.

```svelte
<script lang="ts">
    import Item from './Item.svelte'
</script>

<Item number={1} />
<Item number={2} />
<Item number={3} />
```

Svelte에서는 컴포넌트에 `.svelte` 확장자를 사용합니다.  
`.svelte` 파일에서는 HTML 문법+something을 사용합니다

## 컴포넌트 만들기

`Hello, Svelte!`라는 텍스트를 보여주는 컴포넌트를 만들어 보겠습니다.

```svelte title="Hello.svelte"
<div>Hello, Svelte!</div>
```

## 스벨트 컴포넌트에서의 script 태그

스벨트 컴포넌트에서의 script 태그는 HTML의 스크립트 태그와 살짝 다른 개념입니다.

```svelte
<script lang="ts">
  console.log('Hello')
</script>
```

이 코드에서 스크립트 태그의 내용은 새로운 컴포넌트 인스턴스가 생겨날 때 실행됩니다. -> 컴포넌트가 사용될 때마다 실행됩니다.

이 `<script>` 태그의 `lang="ts"` 부분은 `이 스크립트 태그의 프로그래밍 언어를 Typescript로 설정한다`라는 의미를 가지고 있습니다.  
Adofai.gg에서는 svelte typescript를 사용하기 때문에 이 부분은 필수라고 생각하시면 될 것 같습니다.

## 만든 컴포넌트 사용하기

스벨트에서는 어떤 컴포넌트를 또다른 컴포넌트에서 재사용 가능합니다.  
컴포넌트는 script 태그를 이용해 임포트 후 사용됩니다.

```svelte
<script lang="ts">
    import Hello from './Hello.svelte' // HelloWorld.svelte 파일에서 컴포넌트를 불러옴
</script>

<Hello /> <!-- script 태그에서 불러온 컴포넌트를 사용 -->
```

## 스크립트의 모듈 컨텍스트

`<script>` 태그에 `context="module"`을 추가하면 해당 스크립트가 모듈 단위로 적용됩니다.  
모듈 단위로 적용된 스크립트는 최초 임포트 시에만 실행되며, 다른 모듈에서 사용이 필요한 부분을 export 하는데에도 쓰일 수 있습니다.

```svelte title="DoWork.svelte"
<script lang="ts" context="module">
    export const doWork = () => {
        alert('doing work!')
    }
</script>

<div>Wow doing work</div>
```

이렇게 만들어진 컴포넌트의 모듈 컨텍스트에서 export된 내용을 사용할 수 있습니다.

```svelte
<script lang="ts">
    import DoWork, { doWork } from './DoWork.svelte'

    doWork() // DoWork.svelte에서 export됨
</script>

<DoWork/>
```
