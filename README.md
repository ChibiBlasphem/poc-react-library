# Toucan Component Library (POC)

> NB: This library is a POC and has no intention to be used in any production project

## Run storybook

```yarn storybook```

## Publish the package locally and use it another project

### Publishing

-   Start [verdaccio](https://verdaccio.org/)  
    ```
    yarn verdaccio
    ```
-   Create/Log a user on verdaccio (to publish the package on it)  
    ```
    npm adduser --registry http://localhost:4873/
    ```
-   Publish the package on verdaccio  
    ```
    npm publish
    ```

### Using it in another app

-   Add a .npmrc file at the root of the project, with the following content
    ```plain
    @toucan-private-local:registry=http://localhost:4873/
    ```
-   Install the package from verdaccio (react is a peerDependency so is needed)
    ```
    yarn add @toucan-private-local/component-lib react
    ```
-   Use it in your components:
    -   Vue:
        ```vue
        <template>
            <Counter />
        </template>

        <script lang="ts">
        import { defineComponent } from '@vue/composition-api';
        import { Counter } from '@toucan-private-local/component-lib';
        import { ReactInVue } from 'vuera';

        export default defineComponent({
            name: 'MyComponent',
            components: {
                Counter: ReactInVue(Counter),
            },
        })
        </script>
        ```
    -   React:
        ```tsx
        import { Counter } from '@toucan-private-local/component-lib';

        export function MyComponent() {
            return <Counter />
        }
        ```