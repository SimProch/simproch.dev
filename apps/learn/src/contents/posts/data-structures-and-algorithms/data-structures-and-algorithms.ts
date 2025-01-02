import type { Post } from '../types';
import bigOh from './01-big-oh.json';
import arrayBasedDS from './02-array-based-data-structures.json';
import hashMaps from './03-hash-maps.json';
import recursion from './04-recursion.json';
import nodeBasedDataStructures from './05-node-based-data-structures.json';
import binarySearchTree from './06-binary-search-trees.json';
import heap from './07-heap.json';
import trie from './08-trie.json';
import graphs from './09-graphs.json';

const posts = [
	bigOh,
	arrayBasedDS,
	hashMaps,
	recursion,
	nodeBasedDataStructures,
	binarySearchTree,
	heap,
	trie,
	graphs
] as unknown[] as Post[];
export { posts };
