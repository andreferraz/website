---
name: article-translation
user-invocable: true
description: "Use when translating Markdown or MDX articles between languages, while preserving structure, metadata, code, links, components, context, and the author's voice."
---

# Article Translation

Translate content articles as localized editorial work, not word-for-word substitutions. The default direction is English to Brazilian Portuguese (`pt-BR`), but the same workflow applies to other target languages when the user specifies one.

## Workflow

1. Identify the source article and target locale.
   - If the target locale is not stated, use `pt-BR` for an English source.
   - Inspect the source file and its adjacent metadata file before editing.
   - Check for an existing target-locale sibling before creating a new file.

2. Review the original article before translating.
   - Evaluate the complete source for grammar, spelling, punctuation, unclear wording, broken Markdown/MDX syntax, contradictions, and other errors.
   - Separate critical problems that could change meaning, make the article misleading, or prevent it from rendering from minor editorial suggestions.
   - Report the findings in a Markdown table with exactly these columns: `Original`, `Suggested`, and `Location`.
   - Put the relevant original text or a concise description of a syntax issue in `Original`, the proposed correction in `Suggested`, and a workspace-relative internal Markdown link to the source file in `Location`, including the relevant line number when available, for example `[article.en.mdx](src/content/articles/article.en.mdx#L12)`.
   - Use one row per issue, include both critical and minor issues, and provide enough context for the user to act without silently changing the original.
   - If there is any critical problem, stop before translation and ask when to proceed: after the source is corrected, or after the user explicitly accepts the risk.
   - Ask how to proceed with corrections: the user fixes them, the agent proposes or applies fixes with approval, or the source remains unchanged when only minor issues exist.
   - Begin translation only after the source has no unresolved critical problems and the user has confirmed the chosen path.

3. Establish the article's voice and intent.
   - Read the complete article before translating any section.
   - Preserve the author's level of formality, point of view, humor, rhythm, emphasis, and technical confidence.
   - Localize idioms, examples, punctuation, and sentence rhythm when that makes the text sound natural in the target language.
   - Keep the meaning, nuance, claims, and scope unchanged. Do not add explanations, opinions, or facts.

4. Translate only human-language content.
   - Translate headings, paragraphs, list prose, table prose, captions, accessible labels, and metadata prose such as `title` and `excerpt`.
   - Keep code, code fences, inline code, component names, JSX tags, imports, exports, prop names, CSS classes, anchors, URLs, email addresses, and file paths unchanged unless the user explicitly asks otherwise.
   - Preserve technical terms that are conventionally used in English when translating them would reduce clarity. On first use, add a short Portuguese equivalent only when context requires it.
   - Keep acronyms and named conventions unchanged. Translate their surrounding explanation.

5. Preserve the document exactly as a document.
   - Keep the same section order, heading levels, paragraphs, lists, tables, blockquotes, links, emphasis, inline HTML, MDX expressions, and interactive components.
   - Preserve blank-line requirements around JSX and Markdown blocks.
   - Do not remove, reorder, or rename imports or components.
   - Preserve link destinations exactly. Translate link labels when they are prose.
   - Keep tables valid: preserve the number and order of columns, delimiter rows, and inline formatting.
   - Keep code samples byte-for-byte unchanged unless a comment or displayed string is clearly part of the article's translatable prose. When uncertain, leave it unchanged.

6. Create or update the localized article.
   - Follow the repository's filename convention: generate an equivalent translated slug and replace its locale suffix, for example `article.en.mdx` becomes `artigo.pt-BR.mdx`.
   - Do not overwrite an existing localized article without first comparing it with the source and retaining intentional local edits.
   - Always create or update a matching locale-specific metadata file beside the article, using the same translated slug and locale suffix, for example `artigo.pt-BR.meta.ts`.
   - Match the source metadata and content structure. Translate reader-facing values such as `title` and `excerpt`, while keeping dates, tags, identifiers, and other machine-readable values unchanged unless the repository defines locale-specific values.
   - Preserve the metadata module's imports, exported shape, and types. If the source has no metadata file, inspect the repository convention and create the required locale-specific metadata module without inventing a different schema.

## Brazilian Portuguese Guidance

- Prefer natural contemporary Brazilian Portuguese over European Portuguese.
- Use consistent Brazilian technical vocabulary and capitalization. Keep widely accepted English terms such as `frontend`, `backend`, `framework`, `API`, and `component` when they fit the author's register.
- Adapt idioms and humor so they have the same effect; do not preserve an English expression if it becomes awkward or misleading.
- Preserve inclusive, direct, and conversational language when present in the source.
- Keep terminology consistent throughout the article. Build a small term map for repeated domain terms before making substantial edits.
- Retain intentional emphasis, including bold text, italics, uppercase emphasis, and parenthetical asides.

## Validation Checklist

Before finishing, verify all of the following:

- [ ] The target file uses the expected locale suffix and is beside the source article.
- [ ] Every source section, heading level, table, list, link, code block, MDX tag, and import is still present and in the same order.
- [ ] Markdown and MDX syntax remains valid; no JSX, braces, backticks, or table delimiters were accidentally translated or unbalanced.
- [ ] URLs, anchors, code, identifiers, component names, class names, and paths are unchanged.
- [ ] The translation preserves meaning, context, voice, humor, and technical precision.
- [ ] Brazilian Portuguese reads naturally and terminology is consistent.
- [ ] A matching locale-specific metadata file was created or updated, with reader-facing values translated and machine-readable values preserved.
- [ ] Run the narrowest available content, type, lint, or build validation for the changed article, and report any unrelated failure separately.

## Response Format

Report the target file created or updated and the validation performed. Mention any ambiguous term, unresolved metadata convention, or source issue that required leaving text unchanged. Keep the report concise; do not paste the full translated article unless requested.
