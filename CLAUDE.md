# CLAUDE.md

Guidance for Claude Code when working in this repository. Read this at the start of every session.

## Git branch & merge rules (STRICT — these exist because ignoring them created a mess)

- **One chat = one branch.** Do not switch branches or check out a different branch in the middle of a chat. Whatever branch the work starts on, stay on it for the whole chat.
- **Never merge.** Do not merge any branch into `main` (or into any other branch) unless the user explicitly asks for a merge *in that same chat*. A general "yes" from a past chat does not count.
- **"Done" means stop, not integrate.** When a task is finished, commit the work on the current feature branch and stop. Leave it for the user to review and merge themselves.
- **Starting fresh work:** create a new branch off `main` and stay on it. Do not assume a branch created in another chat exists or is relevant — each chat is a cold start and only sees the current git state.
- **Never delete branches** unless the user explicitly asks.
- **Commit or push only when the user asks.**
