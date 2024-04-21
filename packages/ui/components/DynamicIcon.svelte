<script lang="ts">
  import type { AvailableIcons } from '../types/types';
  import GithubWhite from '../icons/GithubWhite.svelte';
  import IconClose from '../icons/IconClose.svelte';
  import IconExternalWindow from '../icons/IconExternalWindow.svelte';
  import IconMenu from '../icons/IconMenu.svelte';

  const icons: Record<string, any> = {
    'github-white': GithubWhite,
    'icon-close': IconClose,
    'icon-menu': IconMenu,
    'icon-external-window': IconExternalWindow
  };

  export let type: 'large' | 'small' | 'mini' = 'small';
  export let name: AvailableIcons;
  export let linkTo: string | undefined = undefined;
</script>

<div class={type}>
  {#if linkTo}
    <a href={linkTo} target="_blank">
      {#if name.includes('.ico')}
        <img src={`/icons/${name}`} alt={linkTo} />
      {:else}
        <svelte:component this={icons[name]} />
      {/if}
    </a>
  {:else if name.includes('.ico')}
    <img src={`/icons/${name}`} alt={linkTo} />
  {:else}
    <svelte:component this={icons[name]} />
  {/if}
</div>

<style lang="scss">
  .large {
    width: 36px;
    height: 36px;
  }

  .small {
    width: 24px;
    height: 24px;
  }

  .mini {
    width: 16px;
    height: 16px;
  }

  a {
    line-height: 0;
    padding: 4px;
    opacity: 0.5;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
</style>
