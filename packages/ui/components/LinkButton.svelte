<script lang="ts">
  import { goto } from '$app/navigation';

  export let name: string;
  export let linkTo: string;

  const onClick = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    if (linkTo === 'https://simproch.dev/') {
      goto('/');
      return false;
    }
    if (linkTo.startsWith('http')) {
      window.open(linkTo, '_blank');
      return false;
    }
    goto(linkTo);
    return false;
  };
</script>

<a href={linkTo} on:click={onClick}>{name}</a>

<style lang="scss">
  @import '../styles/variables.scss';

  a {
    position: relative;
    margin-top: 4px;
    margin-right: 4px;
    padding: 8px 16px;
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 1);
    border: 4px solid rgba(0, 0, 0, 1);
    cursor: pointer;
    transition: ease-out 0.5s;
    -webkit-transition: ease-out 0.5s;
    -moz-transition: ease-out 0.5s;

    &::after,
    &::before {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      transition: 0.5s;
    }

    &::after {
      top: -$button-border-size;
      left: -$button-border-size;
      border-top: $button-border-size solid transparent;
      border-left: $button-border-size solid transparent;
    }

    &::before {
      bottom: -$button-border-size;
      right: -$button-border-size;
      border-bottom: $button-border-size solid transparent;
      border-right: $button-border-size solid transparent;
    }

    &:hover,
    &:focus {
      color: rgba(255, 255, 255, 1);

      &::after,
      &::before {
        width: calc(100% + $button-border-size);
        height: calc(100% + $button-border-size);
        border-color: rgba(255, 255, 255, 1);
      }
    }
  }
</style>
