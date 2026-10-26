# Lark Agent Bridge

Connect your Lark bot to Codex or Claude Code running on your own computer.

This is the official desktop download and support repository. Development is maintained in a separate private repository.

<!-- downloads:start -->
## Downloads

**Latest testing release: [v0.2.0-alpha.4](https://github.com/systransform88/lark-agent-bridge-releases/releases/tag/v0.2.0-alpha.4)**

| Your computer | Download |
| --- | --- |
| Windows x64 | [Windows installer](https://github.com/systransform88/lark-agent-bridge-releases/releases/download/v0.2.0-alpha.4/Lark-Agent-Bridge-0.2.0-alpha.4-win-x64.exe) |
| Mac with Apple Silicon (ARM64) | [Mac testing instructions and downloads](https://github.com/systransform88/lark-agent-bridge-releases/releases/tag/v0.2.0-alpha.4#important-mac-testing-information). Not Apple-notarized; requires explicit macOS approval where available. |
| Linux x64 | [AppImage](https://github.com/systransform88/lark-agent-bridge-releases/releases/download/v0.2.0-alpha.4/Lark-Agent-Bridge-0.2.0-alpha.4-linux-x86_64.AppImage) · [Debian/Ubuntu package](https://github.com/systransform88/lark-agent-bridge-releases/releases/download/v0.2.0-alpha.4/Lark-Agent-Bridge-0.2.0-alpha.4-linux-amd64.deb) |

[All releases](https://github.com/systransform88/lark-agent-bridge-releases/releases) · [SHA-256 checksums](https://github.com/systransform88/lark-agent-bridge-releases/releases/download/v0.2.0-alpha.4/SHA256SUMS.txt)

Downloads are public and do not require a GitHub account. Intel Mac builds are not included in this release.
<!-- downloads:end -->

## Install and connect

1. Download the installer for your operating system and processor from the release assets. You do not need the automatically generated **Source code** ZIP or tar.gz; those contain this download page.
2. Install and open **Lark Agent Bridge**. On Windows, run the `.exe` installer; on macOS, open the `.dmg` and drag the app into Applications; on Linux, install the `.deb` or allow the AppImage to run as a program in its file properties.
3. Follow the four setup steps: choose your AI agent, create or connect a Lark bot, choose a work folder and access level, then send a test message in Lark.

You need Codex CLI or Claude Code installed and signed in with your own account. The app includes the bridge runtime and Lark CLI. Your Lark organization may require administrator approval for bot creation or permissions.

Keep the computer awake and online while the bot is running. Closing the window keeps the bridge in the system tray when a tray is available; choose Quit to exit. Use Pause bot to disconnect or Cancel task to interrupt work.

## Testing builds

These early builds are intended for testing. Windows builds are unsigned. Mac builds have ad-hoc signatures but are not Apple-notarized and do not pass Gatekeeper approval; read the Mac testing notes before installing. If your organization blocks unsigned applications, ask its administrator; the app does not change your computer's security policy.

Start with **Read files only**. **Create files and run commands** gives the agent your computer account's permissions, beyond the selected folder. Agent and Lark service charges, if any, belong to your own accounts.

Updates are installed manually by downloading a newer installer. Your existing local settings and memories are kept. There is no automatic update service or bridge account registration in this testing version.

## Files and folders

Upload PDFs, images, Markdown/text files, ZIP archives or a folder directly in Lark. Wait for **Attachment received and ready**, then send your instruction. Native folders are expanded into individual files; the bridge provides a file inventory for your agent. Resend files or folders that an older version rejected or ignored.

Processing is bounded: 30 MB per incoming file, up to 200 files per folder/archive and 80 MB total extracted/downloaded data. Text decoding is limited to 8 MB. Nested ZIPs are not automatically expanded. See the release notes for detailed limits.

## Help and feedback

Use [Issues](https://github.com/systransform88/lark-agent-bridge-releases/issues) for setup problems and bug reports. Include the app version, operating system and the error message. Remove app secrets, sign-in codes, access tokens and private conversation or document contents before posting.

## Licence

Lark Agent Bridge's own code is proprietary; see [LICENSE.txt](LICENSE.txt). Each release includes its licence and third-party notices. Third-party components retain their respective licences and rights.
