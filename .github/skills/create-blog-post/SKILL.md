# Skill: Create a new blog post (boilerplate-first)

When asked to create a blog post in this repository, always follow this exact process.

## 1) Pick a slug and create 2 files in `apps/blog/src/posts`
- `SLUG.json` (metadata)
- `SLUG.svx` (content)

`SLUG` must be kebab-case and must match `id` in JSON.

## 2) JSON schema
Use this shape exactly:

```json
{
  "id": "SLUG",
  "date": "D. M. YYYY",
  "title": "Post title",
  "subtitle": "Post subtitle",
  "tags": ["development"],
  "description": "One-sentence SEO summary.",
  "breadcrumbs": "Development"
}
```

Notes:
- `date` must use day/month/year with dots, e.g. `5. 8. 2026`.
- `breadcrumbs` is a section label shown in UI (examples: `Development`, `System Design`, `Data Structures & Algorithms`).

## 3) SVX template
Always start with this template:

```svx
<script>
    import Contents from './SLUG';
    export const contents = Contents
</script>

# {Contents.title}

{Contents.subtitle}

## Introduction <span id="intro" />

TODO: Intro.

## Main idea <span id="main-idea" />

TODO: Main content.

## Takeaways <span id="takeaways" />

- TODO
- TODO
- TODO

## References <span id="references" />

- TODO
```

## 4) Register metadata in `_posts.ts`
Update `apps/blog/src/posts/_posts.ts`:
1. Add `import` for `./SLUG.json`.
2. Add imported variable into `unsortedPosts` array.

## 5) Validation checklist
After changes:
- JSON filename, SVX filename, route slug, and `id` all match.
- `_posts.ts` has import + array entry.
- No TypeScript/Svelte errors.

## 6) Resulting route
Final post URL is:
- `/posts/SLUG`
