# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A personal knowledge management vault using the **PARA method** (Projects, Areas, Resources, Archive), written in Markdown and managed in [Obsidian](https://obsidian.md). There is no build system — the "code" is structured Markdown.

## Folder Structure & PARA Logic

| Folder | Purpose | When to place a note here |
|---|---|---|
| `00-Inbox/` | Quick capture | Everything new goes here first |
| `01-Projects/` | Active work with a deadline and specific outcome | Has a goal and will eventually be done |
| `02-Areas/` | Ongoing responsibilities (no end date) | Maintained indefinitely |
| `03-Resources/` | Reference material | Useful in the future, not time-bound |
| `04-Archive/` | Inactive / completed / paused | No longer active |
| `05-Templates/` | Templater plugin templates | Only template files |
| `06-Daily-Notes/` | Daily notes, named `YYYY-MM-DD.md` | Auto-created by Obsidian |
| `07-MOCs/` | Maps of Content — index/navigation notes | Links to notes across PARA folders |

## Note Conventions

- **Frontmatter** is YAML. Common keys: `created`, `date`, `status`, `tags`, `attendees`.
- **Internal links** use Obsidian wikilink syntax: `[[Folder/Note Title]]` or `[[Folder/Note Title|Display Text]]`.
- **Templates** use Templater syntax: `{{date:YYYY-MM-DD}}`, `{{title}}`, `{{date+1d:YYYY-MM-DD}}`.
- **Commit messages** follow the pattern: `vault: <short description>` (e.g. `vault: add daily note 2026-04-22`).

## Active Focus Areas

- **Healthcare IoT** — Z-Wave/Zigbee device integration, remote patient monitoring, SmartThings platform. Primary project: `gclimb` ([github.com/albertonkat/Gclimb](https://github.com/albertonkat/Gclimb)).
- **SmartThings Development** — Device Handlers, SmartApps, Groovy/CodeNarc linting, GitHub Actions CI.

## Git Sync

Manual sync:
```bash
git add .
git commit -m "vault: <short description>"
git push
```

The **Obsidian Git** plugin can auto-commit on a schedule as an alternative.
