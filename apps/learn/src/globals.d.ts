declare module '*.svx';

interface MdsvexFile {
	default: import('svelte/internal').SvelteComponent;
	metadata: Record<string, string>;
}

type MdsvexResolver = () => Promise<MdsvexFile>;
